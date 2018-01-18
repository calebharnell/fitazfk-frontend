import React, { Component } from 'react';
import { api } from '../api/init';
import SessionsTable from './SessionsTable';
import { Dimmer, Loader } from 'semantic-ui-react'

class BookClasses extends Component {
  constructor(props){
    super(props)
    this.state = {
      week: [],
      sessions: [],
      isLoading: false
    }
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

  changeLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  handleJoinSession = (sessionId) => {
    this.changeLoading()
    api.patch(`/sessions/join`, {
        _id: sessionId
      })
      .then((response) => {
        this.fetchSessions()
        this.changeLoading()
      })
      .catch((error) => {
        console.log('An error occured when trying to book into the session.', error)
      })
  }

    handleLeaveSession = (sessionId) => {
      this.changeLoading()
      api.patch(`/sessions/leave`, {
          _id: sessionId
        })
        .then((response) => {
          this.fetchSessions()
          this.changeLoading()
        })
        .catch((error) => {
          console.log('An error occured when trying to book into the session.', error)
        })
    }

  fetchSessions() {
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

  render() {
    const { week } = this.state;
    let tableDisplay
    if (this.state.isLoading) {
      tableDisplay = <Dimmer active>
                       <Loader>Loading</Loader>
                     </Dimmer>
    } else {
      tableDisplay = week.map(day => <SessionsTable 
                                        key={day} 
                                        day={day} 
                                        sessions={this.matchSessions(day)} 
                                        currentUser={this.props.currentUser}
                                        handleJoinSession={this.handleJoinSession}
                                        handleLeaveSession={this.handleLeaveSession} />)
    }

    return (
      <div>
        <h1>Book Classes</h1>
        {tableDisplay}
      </div>
    );
  }

  componentDidMount(){
    this.createWeek()
    this.fetchSessions()
  }
}

export default BookClasses;
