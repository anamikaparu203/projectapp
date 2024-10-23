const express=require('express');
const cors=require('cors')
const app=new express();
const morgan=require('morgan')
app.use(cors())
app.use(morgan('dev'));
const courseRoutes=require("./Routes/courseRoutes");
app.use('/course',courseRoutes)
const user=require('./Routes/user')
app.use('/user',user)
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');






app.listen(PORT,()=>{
    console.log(`Server is running on PORT${PORT}`);
})
