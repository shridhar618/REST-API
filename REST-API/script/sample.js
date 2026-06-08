const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){
    try {
        await client.connect();
        
        const db = client.db('mydb');
        const users=db.collection('users');

        //insert a document
        await users.insertOne({name: 'Alice', age: 25});

        //query documents
        const user = await users.findOne({name: 'Alice'});
        console.log(user);
    } finally {
        await client.close();
    }
}

main().catch(console.error);