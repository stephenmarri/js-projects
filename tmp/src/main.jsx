import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './common.css'

import Services from './Pages/Services/Services.jsx'
import Copyright from './Components/Copyright.jsx'
import Doctors from './Pages/Doctos/Doctors.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage.jsx'
import Header from './Pages/Navbar/Navbar.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Insurance from './Pages/Insurance/Insurance.jsx'
import Resources from './Pages/Resources/Resources.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
