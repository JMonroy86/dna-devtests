import AWS from 'aws-sdk'
const awsAccessKey = process.env.REACT_APP_AWS_ACCESS_KEY
const awsSecretKey = process.env.REACT_APP_AWS_SECRET_KEY


AWS.config.update({
	region: "us-east-1",
	accessKeyId: awsAccessKey,
	secretAccessKey: awsSecretKey
});
const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

const sqs = new AWS.SQS({
	apiVersion: "2012-11-05",
	accessKeyId: awsAccessKey,
	secretAccessKey: awsSecretKey
});

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			errors: "",
			currentUser: null,
			username: '',
			password: '',
			users: []

		},
		actions: {
			userRegister: (userRegistring, id, history) => {
				const { name, lastname, email, psw } = userRegistring
				const params = {
					"MessageBody": JSON.stringify({
						"id": id,
						"name": name,
						"lastname": lastname,
						"email": email,
						"psw": psw,
					}),
					"QueueUrl": process.env.REACT_APP_AWS_SQSURL
				};

				sqs.sendMessage(params, (err, data) => {
					if (err) {
						console.log("There was an Error: ", err);
					} else {
						console.log("Successfully added message to queue", data);
					}
				});


				history.push("/")
			},
			sendData: (userLogin, history) => {
				const { email, psw } = userLogin
				const actions = getActions()
				let params = {
					TableName: "Users",
					IndexName: "email-index",
					KeyConditionExpression: "#email = :emailValue",
					ExpressionAttributeNames: {
						'#email': "email",
						'#N': 'name'
					},
					ExpressionAttributeValues: {
						':emailValue': email,
					},
					ProjectionExpression: "email, password, #N, lastname",
				};
				documentClient.query(params, function (err, result) {
					if (err) {
						console.log(err);
					} else {
						if (result.Items.length > 0) {
							setStore({currentUser: result.Items[0]})
							localStorage.setItem("currentUser", JSON.stringify(result.Items))
							actions.getUser()
							history.push("/List")
						} else (
							setStore({ errors: "Email address or password incorrect" })
						)
					}
				})

			},
			revalidate: user => {
				setStore({
					currentUser: user
				})
			},
			getUser: () => {
				const scanningParameters = {
					TableName: "Users",
					Limit: 100
				}

				documentClient.scan(scanningParameters, function (error, data) {
					if (error) {
						console.log(error)
					}
					else {
						setStore({ users: data.Items })
					}
				})
			},
			logout: () => {
				setStore({
						currentUser: null,
						errors: null
				})
				localStorage.removeItem('currentUser');
		}
		}
	};
};

export default getState;