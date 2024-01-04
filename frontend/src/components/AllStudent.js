import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AllStudent(params) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res) => {
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    return (

        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students && students.map((students) => (
                        <tr key={students._id}>

                            <td>{students.name}</td>
                            <td>{students.age}</td>
                            <td>{students.gender}</td>
                            <a className="btn btn-primary" href={`/update/${students._id}`} role="button">Update</a>
                            <a className="btn btn-primary" href={`/delete/${students._id}`} role="button">Delete</a>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}