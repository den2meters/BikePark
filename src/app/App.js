import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import '../Styles/App.scss'

function App() {
  return (
    <div className="wrapper-app">
      <BrowserRouter>
        <Header />
        <Main/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;