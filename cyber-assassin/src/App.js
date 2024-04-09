import React, { Component } from 'react';
import './style/style.css';
import Home from './pages/Home/Home.jsx';
import Footer from './pages/Footerbar/footerbar.jsx';
class App extends Component {
  render() {
    return (
    <div>
     <Home />
     <Footer />
      <h1>CYBER-ASSASSIN</h1>
      <h2>Panel</h2>
     </div>
    );
  }
}
export default App;
