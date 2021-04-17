import React from 'react';
import video2 from '../../../videos/travel2.mp4'
import './Header.css'

const Header = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <video src={video2} autoPlay loop muted class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-flex justify-content-center align-items-center flex-column">
                        <h1>Explore Yourself </h1>
                        <p>The journey matters more than the destination</p>
                       <button className="btn btn-success btn-lg mt-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;