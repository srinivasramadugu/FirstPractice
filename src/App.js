import React from 'react';
import './assets/scss/App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// PAGES
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Error from './pages/error';
import Contact from './pages/contact';
import Emp from './pages/employer';
import Blog from './pages/blog';
import CustomHooks from './pages/custmhook';
import CustomStates from './pages/customstates';


// COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Router>
      
    {/* START FOR HEADER */}
      <Header/>
      {/* END FOR HEADER */}

      {/* START FOR MAIN CONTENT */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/service" component={Service}/>
          <Route  path="/error" component={Error}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/employer" component={Emp}/>
          <Route  path="/blog" component={Blog}/>
          <Route  path="/custmhook" component={CustomHooks}/>
          <Route  path="/customstates" component={CustomStates}/>
        </Switch>
      {/* END FOR MAIN CONTENT */}

      {/* START FOR FOOTER */}
      <Footer/>
      {/* END FOR FOOTER */}
      </Router>
      </>
  );
}

export default App;
