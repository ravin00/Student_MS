import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function AddTeacher() {

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const navigate = useNavigate ();

    function sentData(e) {
        e.preventDefault();

        const newTeacher = {

            name,
            age,
            gender
        }

        axios.post("http://localhost:8070/Teacher/add", newTeacher).then(()=>{

            alert("Teacher Added");
            navigate('/');

        }).catch((err)=>{
            alert(err);
        })


    }

    return (

        <div className = "container">
            <form onSubmit={sentData}>
                <div class = "mb-4">
                    <label for="name" class="from-label">Teacher Name</label>
                    <input type = "text" class = "from-control" id="name" placeholder="Enter Student Name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    
                 }}/>
    </div>

    <div class="mb-4">

        <label for="age" class="form-label">Teacher Age</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Student Age"
        onChange={(e)=>{
            setAge(e.target.value);
        }}/>


    </div>
    <div class="mb-4">
        <label for="gender" class="form-label">Teacher Gender</label>
        <input type = "text" class= "form-control" id = "gender" placeholder="Enter Students Gender"

        onChange={(e)=>{
            setGender(e.target.value);
        }}/>
    </div>


    <button type = "submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}