import React, { Component } from 'react';
import './App.css';
import NavBar from './Navbar';
import Header from './Header';
import News from './News/News';
import EmailLine from './Email';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <News />
        <EmailLine />
        <Footer />
      </div>
    );
  }
}

export default App;
