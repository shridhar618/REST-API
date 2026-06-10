const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'SchemaDB';
const collectionName = 'persons';

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Documents to insert
        const documents = [
            { _id: 100, name: 'Mark', age: 25, city: 'New York' },
            { _id: 200, name: 'John', age: 30, city: 'Los Angeles' },
            { _id: 300, name: 'Jane', age: 28, city: 'Chicago' }
        ];

        // Insert documents
        const insertResult = await collection.insertMany(documents);

        console.log(`Inserted ${insertResult.insertedCount || documents.length} documents`);
        console.log('Inserted IDs:', insertResult.insertedIds);

        // Create indexes
        await collection.createIndex({ _id: 1 });
        await collection.createIndex({ age: 1 });
        await collection.createIndex({ city: 1 });
        await collection.createIndex({ name: 1 });

        console.log('Indexes created successfully');

    } catch (error) {
        console.error('Error occurred:', error.message);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

main();