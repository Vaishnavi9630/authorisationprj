import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies(); 
    const navigate = useNavigate();
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const config = {
            method : "post",
            url : "http://localhost:3000/user/login",
            data: {
                email,
                password,
            }
    
        }
    
        axios(config)
        .then((result) => {
            if(result.data === "login success"){
                cookies.set("response", result.data, {
                    path : "/",
                });
                setTimeout( ()=> {
                    navigate("/home")
                },1000);       
            }
            else{
                alert(result.data);
            }  
            console.log(result)})
        .catch((error) => {console.log(error)})
    }


    return(
        <>
        <h3>Login</h3>
        <Form>
            <Form.Group controlId='email '>
                <Form.Label>Email</Form.Label>
                <Form.Control type= "email" name ="email" value={email} placeholder="Enter Email Address"
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type= "password" name ="password" value={password} placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <br></br>

            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
        </Form>

        <br></br>

        <a href="/">Signup here </a>
        </>
    )
}