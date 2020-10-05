import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className='cards'>
            <h1>DON'T BELIEVE US....
                CHECK OUT THESE CUSTOMER REVIEWS!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                        
                        src="images/main_image.jpg"
                        text="The game developers are on another level! The quality is astounding and the program almost never lags! If you're looking for a top-tier software development company Devotion Solutions is it!"
                        label="Coding"
                        path='/code-review'
                    />
                    <CardItem 
                        
                        src="images/vr.jpg"
                        text="The VR graphics are so realistic! It's something that I have NEVER experienced with another headset! Devotion Solutions delivers quality products!"
                        label="VR"
                        path='/vr-review'
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
