import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from './components/image';
import Content from './components/content';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Image />
        Murphy & Breedlove Selfcare Products
      </header>
      <Content></Content>

    </div>
  );
}

export default App;
