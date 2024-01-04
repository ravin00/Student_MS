const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({

    name : { 
        type:String,required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:string,
        required:true
    }
})

const Teacher = mongoose.model("Teacher",TeacherSchema);

module.exports = Teacher;