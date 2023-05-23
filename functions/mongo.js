// TODO: https://github.com/imhul/netlify-functions-workshop/blob/master/lessons/core-concepts/6-using-a-database/functions/mongo/mongo.js

// 1 USAGE ############################################################

// const { MongoClient } = require('mongodb')
// const { MONGODB_URI } = process.env

// let cachedDb = null

// function connectToDatabase (uri) {
//   console.log('=> connect to database')

//   if (cachedDb) {
//     console.log('=> using cached database instance')
//     return Promise.resolve(cachedDb)
//   }

//   return MongoClient.connect(uri).then((db) => {
//     cachedDb = db
//     return cachedDb
//   })
// }

// exports.handler = async (event, context) => {
//   context.callbackWaitsForEmptyEventLoop = false

//   let result
//   try {
//     const db = await connectToDatabase(MONGODB_URI)
//     result = await db.collection('items').find({}).toArray()
//     console.log('result', result)
//   } catch (error) {
//     console.log('error', error)
//     return {
//       statusCode: error.statusCode || 500,
//       body: JSON.stringify({
//         message: error.message
//       })
//     }
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       data: result
//     })
//   }
// }

// 2 USAGE ############################################################

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = ""; // connection string
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// Replace <password> with the password for the blashirk user. Ensure any option params are URL encoded:
// https://dochub.mongodb.org/core/atlas-url-encoding

// 3 USAGE ############################################################

// var axios = require('axios');
// var data = JSON.stringify({
//     "collection": "<COLLECTION_NAME>",
//     "database": "<DATABASE_NAME>",
//     "dataSource": "<CLUSTER_NAME>",
//     "projection": {
//         "_id": 1
//     }
// });

// var config = {
//     method: 'post',
//     url: 'endpoint for example #3',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': '<API_KEY>',
//     },
//     data: data
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
