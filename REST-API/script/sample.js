const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){
    try {
        await client.connect();
        
        const db = client.db('mydb');
        const users=db.collection('sample');

        //insert a document
        await users.insertOne({name: 'Alice', age: 25});

        //query documents
        const user = await users.findOne({name: 'Alice'});
        console.log(user);

        //update a document
        await users.updateOne({name: 'Alice'}, {$set: {age: 26}});

        //delete a document
        await users.deleteOne({name: 'Alice'});
    } finally {
        await client.close();
    }
}

main().catch(console.error);