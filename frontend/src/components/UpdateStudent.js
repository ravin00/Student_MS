import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom"
import axios from "axios"


export default function UpdateStudent() {
    
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
    const navigate=useNavigate();
    
    const {id}=useParams();
    
    useEffect(()=>{
       
        axios.get(`http://localhost:8070/student/gets/${id}`,).then((res)=>{
            setName(res.data.student.name);
            setAge(res.data.student.age);
            setGender(res.data.student.gender);
           
        }).catch((err)=>{
            
            alert(err);
        });
    }, [id])
    function sentData(e) {
        e.preventDefault();
        
        const updateStudent={
            name,
            age,
            gender
        }

        axios.put(`http://localhost:8070/student/update/${id}`,updateStudent).then(()=>{
            alert("Student Updated");
            navigate('/');
           
        }).catch((err)=>{
            alert(err);
        })
        

    }


    return(
        <div className="container">
            <form onSubmit={sentData}>
                <div class="mb-3">
                    <label for="name" class="form-label">Student Name</label>
                    <input type="text" class="form-control" id="name" value={name} placeholder="Enter Student Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                       
                </div>
                <div class="mb-3">
                    <label for="age" class="form-label">Student Age</label>
                    <input type="text" class="form-control" id="age" value={age} placeholder="Enter Student Age" 
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                       
                </div>
                <div class="mb-3">
                    <label for="gender" class="form-label">Student Gender</label>
                    <input type="text" class="form-control" id="gender" value={gender} placeholder="Enter Student Gender" 
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>
                       
                </div>
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}