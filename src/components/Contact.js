import React from 'react';
import { BsDiscord } from 'react-icons/bs';
import { FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaSnapchatSquare} from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const Contact = () => {
    return (
            <div style={{ position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)' }}>
                <h1 className='text-success mb-2'>Contact Us</h1>

                <h3><a style={{ textDecoration: 'none', color: 'tomato' }} href="https://mail.google.com/mail/u/?authuser=sntanju07@gmail.COM"> <ImMail/>Mail</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'blue' }} href="https://www.facebook.com/sntanju07"> <FaFacebookSquare/>Facebook</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'LightSeaGreen' }} href="#"> <FaTwitterSquare/>Twitter</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'LightSalmon' }} href="#"> <FaInstagramSquare/>Instagram</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'orange' }} href="#"> <FaSnapchatSquare/>Snapchat</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'DodgerBlue' }} href="#"> <FaLinkedin/>LinkedIn</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'darkCyan' }} href="#"> <BsDiscord/>Discord</a></h3>

                <h3><a style={{ textDecoration: 'none', color: 'LimeGreen' }} href="#"> <FaWhatsappSquare/>Whatsapp</a></h3>

            </div>
    );
};

export default Contact;