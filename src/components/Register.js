import React, {useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

export default function Register({setToken},props) {
    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        email: "",
        name: "",
        surname: "",
        password: "",
    });

    const onInputChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const { username, password, name, surname, email } = user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/users`, user)
            .then((res) => {
                //console.log("~ res", res)
                console.log("~ res", res.data)
                if(res.data.name && res.data.date) {
                    setToken(res.data);
                    //console.log("Doko ",res.data)
                    //props.history.push("/dashboard");
                }else{
                    alert("Username taken");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("User could not be created");
            });
        history.push("/dashboard");
        console.log("Out side handle");
    };

    return(
        <div style={{paddingLeft: "40%"}} className={"Login"}>
            <div className="card-body">
                <h1>Login Form</h1>
                <form className={"login-form"} onSubmit={(e)=> handleSubmit(e)}>
                    <input type="text" name="username" placeholder="username" value={username} onChange={(e) => onInputChange(e)} required/>
                    <input type="text" name="name" placeholder="name" value={name} onChange={(e) => onInputChange(e)} required/>
                    <input type="text" name="surname" placeholder="surname" value={surname} onChange={(e) => onInputChange(e)} required/>
                    <input type="email" name="email" placeholder="email" value={email} onChange={(e) => onInputChange(e)} required/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => onInputChange(e)} required/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
}
