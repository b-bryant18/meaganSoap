import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from './components/image';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="background">
      <header className="App-header">
        <Image />
        <h4 id="title">Murphy & Breedlove Selfcare Products</h4>
      </header>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
