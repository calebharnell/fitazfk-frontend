import React, { Component } from 'react';
import { api } from '../api/init';
import SessionsTable from './SessionsTable';

class BookClasses extends Component {
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
      <div>
        <h1>Book Classes</h1>
        { 
          week.map(day => <SessionsTable day={day} sessions={this.matchSessions(day)} />)
        }
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

export default BookClasses;
