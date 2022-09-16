import axios from 'axios';
import React from 'react';

const AddText = () => {

    let textAreaText;
    const handleChange = (e) => {
        e.preventDefault();
        textAreaText = e.target.value;        
    }

    const postMassage = async () => {
      axios({
        method: 'post',
        url: 'http://localhost:5000/api/add',
        headers: {},
        data: {"passage": textAreaText}
      });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postMassage();
        alert('Successful');
        window.location.reload();
        
    }

    // CSS STYLES STARTS HERE
    const formContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      margin: '30px 0px',
    };
    const formInput = {
      border: '1px solid black',
      borderRadius: '5px',
      width: '80vh',
      height: '40vh'
    };
    const formTitle = {
      margin: '15px 0px',
      color: 'teal',
    };
    const button={
      backgroundColor: 'black',
      color: 'ghostWhite',
      padding: '5px 20px',
      borderRadius: '5px',
      margin: '15px 0px',
    };
    // CSS STYLES ENDS HERE

    return (
      <div style={formContainerStyle}>
        <div >
          <h2 style={formTitle}><b>Write Your Passage Here</b></h2>
              <textarea style={formInput} onChange={handleChange} placeholder='Start Here...' type="text" />  <br/>
              <button onClick={handleSubmit} style={button} type="submit">
              <b>Submit</b>
              </button>      
        </div>
      </div>
      
    );
};

export default AddText;