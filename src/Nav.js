import React, {useEffect, useState} from "react";
import './index.css';
import useToken from "./components/useToken";
import {Link} from "react-router-dom";
import logout from "./extras";
export function Nav() {
    //console.log(me);

    let me=useToken().token;
    // const [me,setMe]=useState();
    // if(!y) {
    //     setMe(y);
    //     return;
    // }
    const [list,newList]=useState(
        [
            <a href={"/register"} className="insite">register</a>,
            <a href={"/dashboard"} className="insite">login</a>
        ]
    );

    const dependancyArr = [ localStorage.getItem('token')];
    useEffect(()=> {
        if(me){
        newList([
        <Link to={"/update"} className="insite">update profile</Link>,
        <Link to={"/list"} className="insite">list</Link>,
        <Link to={"/dashboard"} className="insite">profile</Link>,
        <Link to={"/"} onClick={logout} className="insite">logout</Link>
        ]);}
        // eslint-disable-next-line
    },dependancyArr)

    return(
    <header id="header" className="header is--white">
        <div className={"row"} style={{color: 'white', padding: '1%'}}>
            <h1 className={"col"} >Portfolio</h1>
            <h2 className={"col"}>{(()=>{if(me){return(me.name)}})()}</h2>
        </div>
        <div className="container">
            <nav className={"row d-flex header__nav"}>
                <ul>
                    {list.map((tab,index)=><li key={index}>{tab}</li>)}
                </ul>
            </nav>
        </div>
    </header>
    )

}
