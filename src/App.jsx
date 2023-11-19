import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Top from './components/Top';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Top/>
          <Hero />
          {/*<Footer/>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;