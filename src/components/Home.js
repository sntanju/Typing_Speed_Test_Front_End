import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

    return (
        <div className='bg-image opacity-75' style={{backgroundImage: "url(https://www.howtogeek.com/wp-content/uploads/2022/04/rgb-lit-gaming-mechanical-keyboard.jpg?height=200p&trim=2,2,2,2)", height:'87vh', backgroundSize: "cover"}}>

            <div className="d-flex justify-content-md-center align-items-center vh-100">
                <Carousel indicators={false} interval={4000} controls={false}>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center fs-1'>
                        <p className='text-white'>Typing Is The Future Of Talking</p>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex justify-content-center fs-1'>
                        <p className='text-white'>Speed Typing Starts From Patience</p>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex justify-content-center fs-1'>
                            <p  className='text-white'>Accurate Slow Typing Is Better Than Faulty Speed Typing</p>
                         </div>
                    </Carousel.Item>

                </Carousel>
            </div>

        </div>
    );
};

export default Home;