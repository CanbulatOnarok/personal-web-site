// components
import Navi from './Components/Navi';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import './Style/app.scss'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [contact, setContact] = useState([]);



  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='CanbulatOnarok' element={<Navi />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
