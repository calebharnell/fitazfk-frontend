import React, { Component } from 'react';
import { api } from './api/init';
import SessionsTable from './components/SessionsTable';
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
  state = {
    week: [],
    sessions: []
  }

  matchSessions = (day) => {
    return this.state.sessions.filter(session => {
      return session.day === day
    })
  }

  createWeek = () => {
    const today = new Date();
    const week = []
    for (let i = 0; i < 7; i++) { 
        week.push(new Date(today.getFullYear(), today.getMonth(), today.getDate() + i).toDateString())
      }
    this.setState({
      week: week
    })
  }

  render() {
    const { week } = this.state;
    return (
      <div className="App">
        <h1>Class Schedule</h1>
        { 
          week.map(day => <SessionsTable day={day} sessions={this.matchSessions(day)} />)
        }
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

  componentDidMount(){
    this.createWeek()
    api.get('/sessions')
      .then((response) => {
        this.setState({
          sessions: response.data
        })
      })
      .catch((error) => {
        console.log('An error occured retrieving sessions.', error)
      })
  }
}

export default App;
