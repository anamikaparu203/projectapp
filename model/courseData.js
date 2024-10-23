const mongoose=require("mongoose");
//create the schema
const courseSchema=mongoose.Schema({
    courseId:Number,
    courseName:String,
    courseCategory:String,
    cousreDescription:String,
    courseDuration:Number
})
const courseData=mongoose.model('courses',courseSchema);
module.exports=courseData;  