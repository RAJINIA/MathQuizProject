import React from 'react';
import {Link} from 'react-router-dom';
import Thankyou from './Thankyou';

function Feedback() {
  let [name, setName] = React.useState('');
  let [email, setEmail] = React.useState('');
  let [message, setMessage] = React.useState('');
  let [rating, setRating] = React.useState('');

  function handleNameChange(event) {
    setName(event.currentTarget.value);
  }

  function handleEmailChange(event) {
    setEmail(event.currentTarget.value);
  }

  function handleMessageChange(event) {
    setMessage(event.currentTarget.value);
  }

  function handleRatingChange(event) {
    setRating(event.currentTarget.value);
  }

  return (
    <div className = "feedback">
      <form>
        <h1>Feedback Page</h1>
        <div className="input-container">
          <label>Your Name :</label>
          <input 
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="input-container">
          <label>Email :</label>
          <input 
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="input-container">
          <label>Your Message</label>
          <textarea 
            value={message} 
            onChange={handleMessageChange}></textarea>
        </div>


        <div>
          <label>Rate the Quiz Page</label>
          <input 
            type="radio" 
            name="rating" 
            value="good" 
            checked={rating === 'good'}  
            onChange={handleRatingChange} /> Good
          <input 
            type="radio" 
            name="rating" 
            value="ok"
            checked={rating === 'ok'}  
            onChange={handleRatingChange} /> Ok
          <input 
            type="radio" 
            name="rating" 
            value="Improve" 
            checked={rating === 'Improve'}  
            onChange={handleRatingChange} /> Improve
        </div>
        <Link to = "/Thankyou">Submit Feedback</Link>
      </form>
    </div>
  );
}


export default Feedback;