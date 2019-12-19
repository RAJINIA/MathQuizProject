import React from 'react';
import pic3 from '../images/pic3.png';


function Grade() {
    return(
        <div className = "home-container">

            <div className = "content">
                <div className = "home-header">
                    <h1>Home Support for Math</h1>
                </div>
                <div className = "home-content">
                    <p>Education Quizzes provides students with home-based support for their schoolwork when using ‘Phones, tablets, desktops and laptop computers.</p>
                    <br/>
                    <p>The online quizzes are written to help children remember and revise what they are learning in class...</p>
                </div>

                <div className = "home-header">
                    <h1>Practice Makes Perfect</h1>
                </div>

                <div className = "home-content">
                    <p>We all know that the more times you remember something the less likely it is that you will forget it and the quizzes provide an enjoyable way to recall crucial facts </p>
                </div>
            </div>
            
            <div className = "image">
                <img src = {pic3}/>
            </div>
            
        </div>
    )
}

export default Grade;