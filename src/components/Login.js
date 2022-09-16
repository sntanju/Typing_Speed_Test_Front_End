import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import InputControl from './InputControl';
import { Card, Button } from 'react-bootstrap';

function Login () {

    const navigate = useNavigate();
    const [ values, setValues ] = useState({
        email: "",
        pass: "",
    });
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(false);
    
    const handleSubmission = () => {
        if( !values.email || !values.pass ) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        signInWithEmailAndPassword(auth, values.email, values.pass) 
        .then( async(res) => {
            setSubmitButtonDisabled(false);
            
            navigate("/");
        })
        .catch( (err) => {
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
        });
    };

    //CSS Styles starts Here
    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };
    const cardDivStyle = {
        backgroundColor: 'teal',
        padding: '20px 50px',
        borderRadius: '10px',
        color: 'white',
        margin: '20px',
    };
    const button={
        backgroundColor: 'black',
        color: 'ghostWhite',
        padding: '5px 20px',
        borderRadius: '5px',
        margin: '15px 0px',
    };
    
    const toggle= {
        textDecoration: 'none',
        color: 'tomato'
    };
    //CSS Styles Ends Here
    
    return (

        <div style={cardContainerStyle}>
            <div style={cardDivStyle} >
                <h1>Login</h1>
                <InputControl className='my-3' placeholder="Enter email address" type='email'
                onChange={ (event) => setValues( (prev) => ({...prev, email: event.target.value}))} />

                <InputControl placeholder="Enter password" type='password'
                onChange={ (event) => setValues( (prev) => ({...prev, pass: event.target.value}))} />

                <div>
                    <b>{errorMsg}</b>
                    <button style={button} disabled={submitButtonDisabled} onClick={handleSubmission}><b>Login</b></button>
                    <p>
                        Already have an account? {" "}
                        <span>
                            <Link style={toggle} to="/signup"><b>SignUp</b></Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;