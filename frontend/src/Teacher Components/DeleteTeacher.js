import React from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";

export default function DeleteTeacher(Params) {

    const navigate = useNavigate();
    const {id} = useParams;

    function DeleteTeacher(e){
        e.preventDefault();

        axios.delete(`http://localhost:8070/teacher/delete/${id}`).then(()=>{
            alert("Student Deleted");
            navigate('/');
        }).catch((err)=>{
            alert(err);
        })
    }

    return (
        <div className="container">
            <form onSubmit={DeleteTeacher}>
                <div class="mb-5">
                    <label for="gender" class ="form-label">Are you sure?</label>
                </div>

                <button type="submit" class="btn btn-primary">Delete</button>
            </form>
        </div>
    )

}