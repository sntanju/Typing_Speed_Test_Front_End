import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetText from './GetText'
import { Col, Container, Row } from 'react-bootstrap';
 
const TypingTest = () => {

    let [post, setpost] = useState('');
    const [isLoading, setLoading] = useState(true);
        useEffect( () => {
        axios.get("http://localhost:5000/generate/passage")
        .then( (response) => {
            setpost(response.data);
        }).catch(err => console.log(err))
    }, [])
 
    const [state,setState] = useState({
        text: post,
        userInput: ''
    });
    let onUserInputChange = (e) => {
        const v = e.target.value;
        setState({
            text: state.text,
            userInput: v
        })
        //console.log(v)
    }
    let text;
    if (isLoading) {
        text = post;
      }
 
    return (
        <Container className='mb-5 mt-2'>
            <Row>
                <Col>
                    <GetText text={text} userInput={state.userInput}/>
                </Col>
                <Col>
                    <textarea style={{fontWeight: "bold"}} value={state.userInput} onChange={onUserInputChange} className='form-control mb-5' placeholder='Start Typing...'>
                    </textarea>
                </Col>
            </Row>
        </Container>
    );
};
 
export default TypingTest;