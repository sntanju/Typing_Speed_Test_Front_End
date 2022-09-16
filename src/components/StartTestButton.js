import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import TypingTestContainer from './TypingTestContainer';

const StartTestButton = () => {

    let [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        // setRedux to initialstate here first
        // now toggle clicked
        setClicked(true);
    }

    return (   
        <>
           <Provider store = {store}>
            {clicked === false ? (<div className='text-center mt-5 p-2' ><Button className='px-5 py-3 fs-3' variant="success" onClick = {handleClicked} ><b>Start Test</b></Button>{' '}</div>) : 
            <TypingTestContainer/>}
            </Provider> 
        </>
    );
};

export default StartTestButton;