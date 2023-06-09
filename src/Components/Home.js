import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();
    const cookies = new Cookies();
    const cookie_value = cookies.get("response");
    if(cookie_value === "login success"){
        return(
            <div>
                <h2>Home Component</h2>
            </div>
        )
    }
    else{
        setTimeout( ()=> {
            navigate("/login")
        },1000);
    }

    return(
        <div>
            <h2>Home Component</h2>
        </div>
    )
}