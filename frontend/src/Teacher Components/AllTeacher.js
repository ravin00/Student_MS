import React, {useState, useEffect } from "react";
import axios from "axios";
export default function AllTeacher(params) {

    const [students,setStudents] = useState([]);

    useEffect(()=>{

        function getTeachers(){
            axios.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();

    }, [])

return }

<div className = "container">
    <table class ="table">
        <thead>
            <tr>
                <th scope = "col">Name</th>
                <th scope = "col">Age</th>
                <th scope = "col">Gender</th>
                <th scope = "col">Action</th>
            </tr>
        </thead>
        <tbody>
            {Teachers && Teachers.map((Teachers)=> (
                <tr key = {students.id} >
                    
                    <td>{Teachers.name}</td>
                    <td>{Teachers.age}</td>
                    <td>{Teachers.gender}</td>
                    <a className="btn btn-primary" href={`/update/${students._id}`} role="button">update</a>
                    <a className="btn btn-primary" href={`/delete/${students._id}`} role="button">delete</a>
                </tr>
            )
            )}
        </tbody>
    </table>
</div>