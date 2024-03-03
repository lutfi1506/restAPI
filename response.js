const response = (statusCode,data,message,res) => {
   res.status(statusCode).json({
      payload: data,
      statusCode,
      message,
      pagination:{
         prev:"",
         next:"",
         max:"",
      }
   })
}

export default response