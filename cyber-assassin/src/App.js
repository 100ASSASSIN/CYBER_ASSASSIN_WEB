import React, { Component } from 'react';
import './style/style.css';
import Home from './pages/Home/Home.jsx';
import Footer from './pages/Footerbar/footerbar.jsx';
import Nav  from './nav/nav.jsx';

class App extends Component {
  render() {
    return (
    <div>
     <Home />
     <Footer />
     <Nav />
     </div>
    );
  }
}
export default App;
