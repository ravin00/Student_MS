import React from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


export default function DeleteStudent(params) {
    const navigate=useNavigate();
    const {id}=useParams();

    function deleteStudent(e){
        e.preventDefault();

        axios.delete(`http://localhost:8070/student/delete/${id}`).then(()=>{
            alert("Student Deleted");
            navigate('/');
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div className="container">
           <form onSubmit={deleteStudent}>
                <div class="mb-3">
                    <label for="gender" class="form-label">Are you sure?</label>
                       
                </div>
                
                
                <button type="submit" class="btn btn-primary">Delete</button>
            </form>
        </div>
    )
}