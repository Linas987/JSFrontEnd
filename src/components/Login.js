import React, {useEffect, useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from "axios";
import {Link, Redirect, useHistory} from "react-router-dom";

// function loginUser(user) {
//     return fetch(`http://localhost:5000/users/${id}`)
//         .then((response) =>
//             response.json()
//         )
// }


export default function Login({setToken}) {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const onInputChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const { username, password } = user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/auth`, user)
            .then((res) => {
                //console.log("~ res", res)
                console.log("~ res", res.data)
                if(res.data.name && res.data.date) {
                    setToken(res.data);
                    //console.log("Doko ",res.data)
                    //props.history.push("/dashboard");
                }else{
                    alert("Username or password incorrect");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("User not found try again");
            });
        console.log("Out side handle");
    };

    return(
        <div style={{paddingLeft: "40%"}} className={"Login"}>
            <div className="card-body">
                <h1>Login Form</h1>
                <form className={"login-form"} onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" name="username" placeholder="username" value={username} onChange={(e) => onInputChange(e)} required/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => onInputChange(e)} required/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
