import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <h1>We Get The Job Done!</h1>
            <p>Put your faith in Devotion Solutions to give YOU the BEST Game Development experience!</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    GET AN ESTIMATE <i className="fas fa-file-invoice-dollar"/>
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    CONTACT US <i className="fas fa-mobile"/>
                </Button>

            </div>
            
        </div>
    );
}

export default HeroSection;
