import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import logout from './extras';

// import ReactDOM from "react-dom";
// import * as THREE from "three";
// import { Markup } from 'interweave';

// const RenderHTML=()=>{
//     const htmlPart=fetch('http://localhost:5000')
//     console.log(htmlPart)
//     return(
//         <div dangerouslySetInnerHTML={ {__html: htmlPart} } />
//     )
// }

function App(props){
    let me =props.props;
    const remove = async (e) => {
      axios
          .delete(`http://localhost:5000/users/`+me.id)
          .then((res) => {
              logout();
          })
          .catch((error) => {
              console.log(error);
              alert("cant delete account");
          });
      console.log("Out side handle");
    };
  return (
    <div style={{'padding': '0 25% 0 25%'}} className="App justify-content-lg-center text-center">
                <div key={me.id} style={{'paddingBottom': '15px'}} className={"row"}>
                        <div className={"row card-body"}>
                        <h2>{me.username}</h2>
                     <i>
                         Name: '{me.name}' , Surname : '{me.surname}'
                     </i><br/>
                     <i>Account creation on: '{me.date}'</i>
                        </div>
                </div>
              <Button
                onClick={() => {
                  remove();
                }}
              >
                remove account
              </Button>
    </div>
  );
};

export default App;
