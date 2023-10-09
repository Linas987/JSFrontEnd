import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";

function Update({props,setToken}){
  let me =props;
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        name: "",
        surname: "",
        password: "",
    });

    const onInputChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const { password, name, surname, email } = user;

    const emailValidation=(email)=>{
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(email!="" && regex.test(email) === false){
          alert("email not valid");
          return false;
      }
      return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(emailValidation(user.email))
        {
        axios
          .put(`https://jsazureapi.azurewebsites.net/users/`+me.id,user)
          .then((res) => {
            //console.log("~ res", res)
            console.log("~ res", res.data)
            if(res.data) {
              if(res.data.email)
                me.email = res.data.email;
              if(res.data.name)
                me.name = res.data.name;
              if(res.data.surname)
                me.surname = res.data.surname;
              if(res.data.password)
                me.password = res.data.password;

                console.log(me);
                setToken(me);
                history.push("/dashboard");
                //console.log("Doko ",res.data)
                //props.history.push("/dashboard");
            }else{
                alert("Username taken");
            }
          })
          .catch((error) => {
              console.log(error);
              alert("cant update account");
          });
        }
        console.log("Out side handle");
    };

    return(
        <div style={{paddingLeft: "40%"}} className={"Login"}>
            <div className="card-body">
                <h1>Update Form</h1>
                <form className={"login-form"} onSubmit={(e)=> handleSubmit(e)}>
                    <input type="text" name="name" placeholder="name" value={name} onChange={(e) => onInputChange(e)}/>
                    <input type="text" name="surname" placeholder="surname" value={surname} onChange={(e) => onInputChange(e)}/>
                    <input type="email" name="email" placeholder="email" value={email} onChange={(e) => onInputChange(e)}/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => onInputChange(e)} required/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
};

export default Update;
