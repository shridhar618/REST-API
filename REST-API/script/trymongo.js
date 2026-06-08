const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'nodeDB';
const collectionName = 'emp-collection';

//create a new object of MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        //connect to the MongoDB server
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        //insert a document
        const insertResult = await collection.insertOne({ name: 'John Doe', age: 30 });
        console.log('Inserted document:', insertResult.insertedId);

        //find documents
        const documents = await collection.find({}).toArray();
        console.log('Documents in collection:', documents);
    }
    catch (err) {
        console.error('An error occurred:', err);
    }
    finally {
        //close the connection
        await client.close();
        console.log('Connection closed');
    }
}

main().catch(console.error);