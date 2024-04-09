import React, { Component } from 'react';
import './style/style.css';
import Home from './pages/Home/Home.jsx';
import Footer from './pages/Footerbar/footerbar.jsx';
import Nav from './nav/nav.jsx';
import Page from './pages/test.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    };
  }

  renderPage() {
    const { currentPage } = this.state;
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Page':
        return <Page />;
      default:
        return <Home />;
    }
  }

  navigate(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div>
        <button  onClick={() => this.navigate('Page')}>Navigate to Page</button>
        {this.renderPage()}
        <Footer />
        <Nav />
      </div>
    );
  }
}

export default App;
