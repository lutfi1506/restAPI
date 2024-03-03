import express from "express";
import response from "./response";

require("./utils/db")
import Siswa from "./model/Siswa";

const app = express();
const port = process.env.PORT;
app.use(express.json());


const key = "20";
const middleware = (req,res,next) => {
   (req.query.key === key)?
   next():
   res.send("key salah")
}

app.use(middleware)

app.get("/", (req,res) => {
   res.send('hai')
});

app.get("/siswa", async(req,res) => {
   try{
      const siswa =  await Siswa.find()
      response(200, {siswa},"show All siswa",res)
   }
   catch(err){
      res.send(err)
   }
});

app.post("/siswa", async(req,res) => {
   try{
      const input = new Siswa(req.body)
      const query = await input.save()
      response(200,query,"added siswa is success",res)
   }
   catch(err){
      res.send(err)
   }
});

app.delete("/siswa",async(req,res) => {
   try{
      const nama = req.body.nama
      const query = await Siswa.deleteOne({nama})
      response(200,query,`deleted siswa whith name ${nama}`,res)
   }
   catch(err){
      res.send(err)
   }
})

app.put("/siswa",async(req,res) => {
   try{
      const filter = req.body.filter
      const update = req.body.update
      const query = await Siswa.updateOne(filter,update)
      response(200,query,`siswa has Updated`,res)
   }
   catch(err){
      res.send(err)
   }
})

app.listen(port, () => {
console.log(`Listening on port ${port}...`);
});

module.exports = app