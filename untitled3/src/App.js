import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";
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
    </div>
  );
};

export default App;
