import React, { useEffect, useState } from 'react';
import '../Style/contact.scss';
import axios from 'axios';


const Contact = () => {
  const [data, setData] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getData = async () => {
    const response = await axios.get('http://localhost:3005/iletisim')
    const mesajlar = response.data
    setData(mesajlar)
  }

  const newMessage = async (yeni) => {
    const response = await axios.post('http://localhost:3005/iletisim', yeni)
    if (response.status === 200) {
      setData(prev => [...prev, yeni])
    }
  }
  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newMessage({
      fullname: fullName,
      email: email,
      message: message
    })
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className='form-area'>
      <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <input
          onChange={e => setFullName(e.target.value)}
          type="text"
          placeholder='Full Name:'
          value={fullName}
        />
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder='E-Mail:'
          value={email}
        />
        <textarea
          onChange={e => setMessage(e.target.value)}
          placeholder='Message:'
          value={message}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
