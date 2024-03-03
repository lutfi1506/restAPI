import { MongoClient } from "mongodb";

const host = "127.0.0.1"
const port = "27017"
const dbName = "skaone"
const uri = `mongodb://${host}:${port}`
const collection = "siswa"

const show = async() => {
   const client = new MongoClient(uri);
   const db = client.db(dbName).collection(collection)
   const result = await db.find().toArray((err,result)=>{
      if(err) throw err
      return (result)
   })
   client.close()
   return (result)
}
const insertOne = async(input) => {
   const client = new MongoClient(uri);
   const db = client.db(dbName).collection(collection)
   const result = await db.insertOne(input).catch((err)=>err)
   client.close()
   return result
}
const edit = async(find,replace) => {
   const client = new MongoClient(uri)
   const db = client.db(dbName).collection(collection)
   const result = await db.updateOne(find,replace).catch((err)=>err)
   client.close()
   return result
}
const hapus = async(finding) => {
   const client = new MongoClient(uri)
   const db = client.db(dbName).collection(collection)
   const result = await db.deleteMany(finding).catch((err)=>err)
   client.close()
   return result
}
const count = async() => {
   const client = new MongoClient(uri)
   const db = client.db(dbName).collection(collection)
   const result = await db.countDocuments()
   client.close()
   return result
}

export default {show,insertOne,edit,hapus,count}