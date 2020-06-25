import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database=firebase.database();

export { firebase, database as default };

// const onExpensesChange=database.ref('expenses').on('value',(snapshot)=>{
// 	const expenses=[];
// 	snapshot.forEach((childSnapshot)=>{
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'coffee',
// 	note: 'nescafe',
// 	amount: 350,
// 	createdAt: '24/06/2020'
// });

// database.ref('expenses').push({
// 	description: 'Gas bill',
// 	note: 'gas connection monthly bill',
// 	amount: 8999,
// 	createdAt: '12/1/2020'
// });

// database.ref('expenses').push({
// 	description: 'Water bill',
// 	note: 'drinking water monthly bill',
// 	amount: 230,
// 	createdAt: '3/4/2018'
// });



// const onValueChange=database.ref().on('value',(snapshot)=>{
// 	console.log(snapshot.val().name+' currently works at '+snapshot.val().job.company);
// },(e)=>{
// 	console.log("Something went Wrong",e);
// });

// setTimeout(()=>{
// 	database.ref('job/company').set('OpenAI');
// },3500);

// setTimeout(()=>{
// 	database.ref().off('value',onValueChange);
// },3500);

// setTimeout(()=>{
// 	database.ref('job/company').set('Amazon');
// },3500);

// database.ref().set({
// 	name: 'Jayesh Sharma',
// 	age: 27,
// 	stressLevel: 6,
// 	job:{
// 		title: 'software Engineer',
// 		company: 'Amazon'
// 	},
// 	location:{
// 		city: 'udaipur',
// 		state: 'rajasthan'
// 	}
// }).then(()=>{
// 	console.log('Data is saved');
// }).catch((e)=>{
// 	console.log('this Failed: ',e);
// })

// database.ref().update({
// 	stressLevel: 9,
// 	'job/compnay': 'Amazon',
// 	'location/city': "bangalore"
// })