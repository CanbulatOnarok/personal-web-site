import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/home.scss'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/CanbulatOnarok/home");
  }, []);

  return (
    <div className='home-area'>
      <h1>HEY, I'M CANBULAT ONAROK</h1>
      <p>"I'm a passionate front-end developer who loves bringing ideas to life through code and design. With a keen eye for detail and a strong foundation in HTML, CSS, JavaScript and React Js, I'm dedicated to creating visually stunning, user-friendly websites and applications. I'm always excited to stay up-to-date with the latest web development trends and technologies to deliver the best possible user experience."</p>
    </div>
  )
}

export default Home
