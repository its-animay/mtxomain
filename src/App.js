import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Error404 from './components/error_404';
import './App.css';
import Navba from './components/navbar';
import Profile from './components/profile';
import Profile_card from './components/profile_card';

function App({ Component }) {
  return (

    <div className="App">
      <Header />
      <Routes>
        {/* Define your main route (e.g., home page) */}
        <Route path="/" element={
          <>
            <Navba />
            
            <Footer />
          </>
        } />

        {/* Any undefined route will fall to Error404 */}
        <Route path="*" element={<Error404 />} />
        <Route path="/profile" element={
          <>
           <Navba />

           <Profile_card/>
        
           <Footer />
          </>
        } />
      </Routes>
    </div>


  );
}

export default App;
