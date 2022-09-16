import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFacebook} from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';


const Footer = () => {
    return (  
             <>
                <Row className='bg-dark text-light fixed-bottom' >
                    <Col lg={5} className='mx-3 my-1' ><h4>Typer</h4></Col>
                    <Col className='my-1'>
                        <Row>
                            <Col lg={1} md={1} sm={1} xm={1} >
                                <h4>
                                    <a className='text-light' href="https://www.facebook.com/sntanju07"> <BsFacebook/> </a>
                                </h4>
                            </Col>
                            <Col lg={1} md={1} sm={1} xm={1} >
                                <h4>
                                    <a className='text-light' href="https://mail.google.com/mail/u/?authuser=sntanju07@gmail.COM"> <ImMail4/> </a>
                                </h4>
                            </Col>
                        </Row>
                    </Col>
                    <p className='text-center text-warning'>All rights reserved by 	&copy;Typer.com</p>
                </Row>
            </>            
    );
};

export default Footer;