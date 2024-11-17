import  { useState } from 'react';
import axios from 'axios';

function SendMessage() {
  const [message, setMessage] = useState('');
  
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/communication', { message });
      alert('Message sent successfully!');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Enter your message here..."
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default SendMessage;