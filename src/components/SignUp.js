import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from './InputControl';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function SignUp () {

    const navigate = useNavigate();
    const [ values, setValues ] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(false);
    
    const handleSubmission = () => {
        if( !values.name || !values.email || !values.pass ) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        createUserWithEmailAndPassword(auth, values.email, values.pass) 
        .then( async(res) => {
            setSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name,
            });
            navigate("/");
            window.location.reload();
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
    const cardHeader = {
        marginBottom: '20px'
    }
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
            <div style={cardDivStyle}>
                <h1 style={cardHeader}>SignUp</h1>
                <InputControl placeholder="Enter Your Name"
                onChange={ (event) => setValues( (prev) => ({...prev, name: event.target.value}))}/>

                <InputControl className='my-3' placeholder="Enter email address" type='email'
                onChange={ (event) => setValues( (prev) => ({...prev, email: event.target.value}))}/>

                <InputControl placeholder="Enter password" type='password'
                onChange={ (event) => setValues( (prev) => ({...prev, pass: event.target.value}))}/>
                <div>
                    <b>{errorMsg}</b>
                    <button style={button} onClick={handleSubmission} disabled={submitButtonDisabled}><b>SignUp</b></button>
                    <p>
                        Already have an account? {" "}
                        <span>
                            <Link style={toggle} to="/login"><b>Login</b></Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;