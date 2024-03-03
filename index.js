import express from "express";
import response from "./response";

require("./utils/db")
import Siswa from "./model/Siswa";

const app = express();
const port = 8080;
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
   const siswa =  await Siswa.find()
   response(200, {siswa},"show All siswa",res)
});

app.post("/siswa", async(req,res) => {
   const input = new Siswa(req.body)
   const query = await input.save()
   response(200,query,"added siswa is success",res)
});

app.delete("/siswa",async(req,res) => {
   const nama = req.body.nama
   const query = await Siswa.deleteOne({nama})
   response(200,query,`deleted siswa whith name ${nama}`,res)
})

app.put("/siswa",async(req,res) => {
   const filter = req.body.filter
   const update = req.body.update
   const query = await Siswa.updateOne(filter,update)
   response(200,query,`siswa has Updated`,res)
})

app.listen(port, () => {
console.log(`Listening on port ${port}...`);
});
