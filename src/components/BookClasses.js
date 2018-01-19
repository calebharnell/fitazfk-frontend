import React, { Component } from 'react';
import { api } from '../api/init';
import SessionsTable from './SessionsTable';
import DayRadioFilters from './DayRadioFilters';
import { Dimmer, Loader } from 'semantic-ui-react'

class BookClasses extends Component {
  constructor(props){
    super(props)
    this.state = {
      week: [],
      sessions: [],
      isLoading: false,
      filterDay: [],
      filterClass: '',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  }

  filterByDay = (value) => {
    console.log(value)
    if (this.state.filterDay.includes(value)) {
      let result = this.state.filterDay.filter(day => day !== value)
      this.setState({
        filterDay: result
      })
    } else {
      this.setState({
        filterDay: [...this.state.filterDay, value]
      })
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
    const { week, days, filterDay } = this.state;
    let tableDisplay
    if (this.state.isLoading) {
      tableDisplay = <Dimmer active>
                       <Loader>Loading</Loader>
                     </Dimmer>
    } else {
      if (filterDay.length < 1) {
      tableDisplay = week.map(day => <SessionsTable 
                                        key={day} 
                                        day={day} 
                                        sessions={this.matchSessions(day)} 
                                        currentUser={this.props.currentUser}
                                        handleJoinSession={this.handleJoinSession}
                                        handleLeaveSession={this.handleLeaveSession} />)
      } else {
        tableDisplay = week.filter(dayDate => filterDay.some(day => dayDate.includes(day)))
                           .map(day => <SessionsTable 
                                          key={day} 
                                          day={day} 
                                          sessions={this.matchSessions(day)} 
                                          currentUser={this.props.currentUser}
                                          handleJoinSession={this.handleJoinSession}
                                          handleLeaveSession={this.handleLeaveSession} />)
      }
    }

    return (
      <div>
        <h1>Book Classes</h1>
        {days.map(day => <DayRadioFilters 
                          handleCheck={this.filterByDay}
                          filterDay={this.state.filterDay}
                          value={day}
                          label={day} />)}
        
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
