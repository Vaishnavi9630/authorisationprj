import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default function Register(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [resgister, setRegister] = useState(false);

    const handleSubmit = (e) =>{
        alert("submitted");

        const config = {
            method : "post",
            url : "http://localhost:3000/user/register",
            data: {
                firstName,
                lastName,
                email,
                password,
            }
    
        }
    
        axios(config)
        .then((result) => {console.log(result)})
        .catch((error) => {console.log(error)})
    
    }

    
    return(
        <>
        <h3>Register</h3>
        <Form>
            <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type= "text" name ="firstName" value={firstName} placeholder="Enter First Name" 
                onChange={(e) => setFirstName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='lastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type= "text" name ="lastName" value={lastName} placeholder="Enter Last  Name"
                onChange={(e) => setLastName(e.target.value)}></Form.Control>
            </Form.Group>
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

        <a href="/login">Already existing user? Login here </a>
        </>
    )
} 