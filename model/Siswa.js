import mongoose from 'mongoose';

const Siswa = mongoose.model('Siswa',{
   nama: {
      type: String,
      required: [true,"nama harus di isi"]
   },
   noHp:{
      type: String,
      required: [true,"no Hp harus di isi"]
   },
   email:{
      type: String,
      required: [true,"email harus di isi"]
   }
})

export default Siswa