import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import RegisterComponent from './components/RegisterComponent';
import SpeedDialComponent from './components/SpeedDial';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="container mx-auto">
        <RegisterComponent />
        <br />
        <SpeedDialComponent />
        <br />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
