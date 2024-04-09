import React, { Component } from 'react';
import './style/style.css';
import Home from './pages/Home/Home.jsx';
import Footer from './pages/Footerbar/footerbar.jsx';
import Nav  from './nav/nav.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './pages/test.jsx';
class App extends Component {
  render() {
    return (
    <div>
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="./pages/test.jsx" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
     <Home />
     <Footer />
     <Nav />
     </div>
    );
  }
}
export default App;
