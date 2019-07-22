// import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

// const uri = "mongodb+srv://admin:Ky4pA0Ojn6ZR4OoZ@logic-ghe8g.mongodb.net/test?retryWrites=true&w=majority";
const uri = "mongodb+srv://admin:Ky4pA0Ojn6ZR4OoZ@logic-ghe8g.mongodb.net/test?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };

console.info("::::mongoose::::", mongoose);

// const connected = mongoose.connect(uri).then(err, db = console.info("err, db: ", err, db));
mongoose.connect(uri);
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
const db = mongoose.connection;

// connector.then(
 
//   () => { console.info("::::connected:::") },
   
//   err => { console.info("::::connected err::::", err) }
   
// );

// const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {

//   // perform actions on the collection object
//   console.info("::::connected err::::", err);
//   client.close();
// });

// const collection = client.db("logic").collection("sample_training");
// const collection = mongoose.db("logic").collection("sample_training");

console.info("db: ", db);
// console.info("collection: ", collection);
console.info("connected: ", connected);

export default mongoose;