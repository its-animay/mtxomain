import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Error404 from './components/error_404';
import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';


function App({ Component }) {
  return (

    <div className="App">
     
      <Routes>
        {/* Define your main route (e.g., home page) */}
        <Route path="/" element={
          <>
            <Navbar />
           
            <Footer />
          </>
        } />

        
        <Route path="*" element={<Error404 />} />
        <Route path="/profile" element={
          <>
           <Navbar />

           <Profile/>

        
           <Footer />
          </>
        } />
      </Routes>
    </div>


  );
}

export default App;
