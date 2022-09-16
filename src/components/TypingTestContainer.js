import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowResult from './ShowResult';
import Timer from './Timer';
import TypingTest from './TypingTest';

const TypingTestContainer = () => {
    let [flag, setFlag] = useState(false);
    return (
        <Container >
            <Row className='text-center justify-content-center my-3'>
                {
                    flag === false ? ( <> <Timer flag = {flag} setFlag={setFlag}/> <TypingTest/>  </>) : <ShowResult/>
                }
            </Row>
        </Container>
    );
};

export default TypingTestContainer;