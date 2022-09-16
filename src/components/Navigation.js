import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navigation = ({name, isAdmin}) => {

      const [ errorMsg, setErrorMsg ] = useState("");
      const handleLogout = () => {
        signOut(auth).then(() => {
          window.location.reload();
        }).catch((error) => {
          setErrorMsg(error.message)
        });
      }
      
    return (
        <Navbar className='bg-dark vw-80'>
          <Container>
            <Navbar.Brand className='text-warning fs-3' ><b>T Y P E R</b></Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">

                <Link to="/">
                  <Button className='btn btn-info mx-1'><b>Home</b></Button>
                </Link>

                <Link to="/starttest">
                  <Button className='btn btn-info mx-1'><b>Practice</b></Button>
                </Link>

                {
                  isAdmin === true? <Link to="/addtext">
                  <Button className='btn btn-info mx-1'><b>AddText</b></Button>
                </Link> : null
                }

                <Link to="/contact">
                  <Button className='btn btn-info mx-1'><b>Contact</b></Button>
                </Link>

                {  name === "" ? (<>
                  <Link to="/signup">
                  <Button className='btn btn-info mx-1'><b>Register</b></Button>
                  </Link>

                  <Link to="/login">
                  <Button className='btn btn-info mx-1'><b>Login</b></Button>
                  </Link>

                   </>)  : 
                  (<>
                  <Link to="/">
                  <Button onClick={handleLogout} className='btn btn-info mx-1'><b>Logout</b></Button>
                  </Link> 

                  <h2 className='text-light mt-2 ms-2'><b>{name}</b></h2></>) }

              </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Navigation;