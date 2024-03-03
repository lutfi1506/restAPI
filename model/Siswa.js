import mongoose from 'mongoose';

const Siswa = mongoose.model('Siswa',{
   nama: {
      type: String,
      required: true,
   },
   noHp:{
      type: String,
      required: true,
   },
   email:{
      type: String,
      required: true
   }
})

export default Siswa