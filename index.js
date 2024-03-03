import express from "express";
import connnection from "./connnection";
import response from "./response";

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
   const query = await connnection.show()
   const count = await connnection.count()
   response(200, {siswa: query,count},"show siswa",res)
});

app.post("/siswa", async(req,res) => {
   const nama = req.body.nama
   const kelas = req.body.kelas
   const query = await connnection.insertOne({nama,kelas}).then((result) => result)
   response(200,query,"added siswa",res)
});

app.delete("/siswa",async(req,res) => {
   const nama = req.body.nama
   const query = await connnection.hapus({nama}).then((result)=>result)
   response(200,query,`deleted siswa whith name ${nama}`,res)
})


app.put("/username",(req,res) => {
   console.log({updateData: req.body})
   res.send('siswa updated')
})

app.listen(port, () => {
console.log(`Listening on port ${port}...`);
});
