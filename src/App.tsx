import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/Sections/About';
import { PhotoBooth } from './components/Sections/PhotoBooth';
import { AIAgent } from './components/Sections/AIAgent';
import { Platform } from './components/Sections/Platform';
import { IR } from './components/Sections/IR';
import { IRPresentation } from './components/Sections/IR/IRPresentation';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/ir" element={<IR />} />
        <Route path="/presentation" element={<IRPresentation />} />
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <PhotoBooth />
            <AIAgent />
            <Platform />
          </main>
        } />
      </Routes>
    </Router>
  );
}

export default App;
