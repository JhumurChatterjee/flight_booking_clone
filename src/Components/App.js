import React from 'react';
import Routing from '../Routing'; 
import Navigation from './Navbar';

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routing />
      </div>
    </>
  );
}

export default App;
