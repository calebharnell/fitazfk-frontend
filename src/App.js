import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BookClasses from './components/BookClasses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
           <div>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/sign-up">Sign Up</Link></li>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/book-classes">Book Classes</Link></li>
               <li><Link to="/Gallery">Gallery</Link></li>
               <li><Link to="/Contact">Contact</Link></li>
             </ul>

             <hr/>

             <Route exact path="/" component={Home}/>
             <Route path="/sign-up" component={SignUp}/>
             <Route path="/login" component={Login}/>
             <Route path="/book-classes" component={BookClasses}/>
             <Route path="/gallery" component={Gallery}/>
             <Route path="/contact" component={Contact}/>

           </div>
         </Router>
      </div>
    );
  }
}

export default App;
