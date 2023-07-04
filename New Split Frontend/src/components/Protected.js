import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import React from 'react'
import Login from "./loginandReg/Login";

const Protected = (props) => {
    const { Component } = props;
    const nav = useNavigate();

    let userLogin = localStorage.getItem('userLogin');

    useEffect(() => {
        // console.log(userLogin);
        if (userLogin === "false") {
            nav('/login');
        }
    })

    return (
        <div>
            {
                userLogin === "true" ? (<Component />) : (<Login />)
            }
        </div>
    );
}

export default Protected;
