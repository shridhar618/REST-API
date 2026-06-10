const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'myDatabase';
const collectionName = 'emp-collection';

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // array of documents to insert
        const documents = [
            { name: 'Mark', age: 25, city: 'New York' },
            { name: 'John', age: 30, city: 'Los Angeles' },
            { name: 'Jane', age: 28, city: 'Chicago' }
        ];

        // insert multiple documents
        const insertResult = await collection.insertMany(documents);
        console.log('Inserted documents:', insertResult.insertedCount);

        console.log('Inserted document IDs:', insertResult.insertedIds);
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await client.close();
    }
}

main();