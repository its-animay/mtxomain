import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Error404 from './components/error_404';
import './App.css';
import NavBAar from './components/navbar';
import {NextUIProvider} from "@nextui-org/react";

function App({Component}) {
  return (
    <NextUIProvider >
          
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          {/* Define your main route (e.g., home page) */}
          <Route path="/" element={
            <>
            <NavBAar />
              {/* <Services /> */}
              {/* <About /> */}
              {/* <Contact /> */}
              {/* <Footer /> */}
            </>
          } />

          {/* Any undefined route will fall to Error404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
          </NextUIProvider>
  );
}

export default App;
