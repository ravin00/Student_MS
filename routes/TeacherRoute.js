const router=require("express").Router();
const{ response } = require("express");
const Teacher = require("../models/Teacher");
let Teacher = require ("../models/Teacher");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newTeacher = new Teacher({

        name,
        age,
        gender
    })

    newTeacher.save().then(()=>{
        res.json("Teacher Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Teacher.find().then((Teacher)=>{
        res.json(Teacher)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId=req.params.id;
    const{name,age,gender}=req.body;

    const updateTeacher={
        name,
        age,
        gender
    }

    const update = await Teacher.findByIdAndUpdate(userId,updateTeacher).then(()=>{
        res.status(200).send({status:"User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Teacher.findByIdAndDelete(userId).then((Teacher)=>{
        res.status(200).send({status: "Error with get user", eroor: err.message})
    })
})

modeule.exports=router;