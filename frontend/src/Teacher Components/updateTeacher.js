import React, {useState, useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom"
import axios from "axios"

export default function updateTeacher(){

    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
    const navigate=useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8070/Teacher/gets/${id}`,).then((res)=>{
            setName(res.data.Teacher.name);
            setAge(res.data.Teacehr.age);
            setGender(res.data.Teacher.gender);
        }).catch((err)=>{

            alert(err);
        });
    }, [id])

    function setData(e) {
        e.preventDefault();

        const updateTeacher = {
            name,
            age,
            gender
        }

        axios.put(`http://localhost:8070/student/update/${id}`,updateTeacher).then(()=>{

            alert("Teacher Updated");
            navigate('/');

        }).catch((err)=>{

            alert(err);
        })
    }

    return (
        <div className="container">
            <form onSubmit={sentData}>
                <div class="mb-3">
                    <label for="name" class="form-label">Teacher Name</label>
                    <input type="text" class="form-control" id="name" value={name} placeholder="Enter Teacher Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                       
                </div>
                <div class="mb-3">
                    <label for="age" class="form-label">Teacher Age</label>
                    <input type="text" class="form-control" id="age" value={age} placeholder="Enter Teacher Age" 
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                       
                </div>
                <div class="mb-3">
                    <label for="gender" class="form-label">Teacher Gender</label>
                    <input type="text" class="form-control" id="gender" value={gender} placeholder="Enter Teacher Gender" 
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>
                       
                </div>
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}