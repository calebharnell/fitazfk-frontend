import React, { Component } from 'react';
import { api } from '../api/init';
import SessionsTable from './SessionsTable';
import DayRadioFilters from './DayRadioFilters';
import ClassSelectorDropdown from './ClassSelectorDropdown';
import { Dimmer, Loader, Segment, Grid } from 'semantic-ui-react';

class BookClasses extends Component {
  constructor(props){
    super(props)
    this.state = {
      week: [],
      sessions: [],
      isLoading: false,
      filterDay: [],
      filterClass: [],
      days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
  }

  filterByDay = (value) => {
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

  filterByClass = (value) => {
    this.setState({
      filterClass: value
    })
  }

  matchSessions = (day) => {
    if (this.state.filterClass < 1) {
      return this.state.sessions.filter(session => {
        return session.day === day
      })
    } else {
      let filterSessionResult = this.state.sessions.filter(session => this.state.filterClass.some(sessionName => session.name.includes(sessionName)))
      return filterSessionResult.filter(session => session.day === day)
    }
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
    api.patch(`/sessions/join`, {
        _id: sessionId
      })
      .then((response) => {
        this.fetchSessions()
      })
      .catch((error) => {
        console.log('An error occured when trying to book into the session.', error)
      })
  }

  handleLeaveSession = (sessionId) => {
    api.patch(`/sessions/leave`, {
        _id: sessionId
      })
      .then((response) => {
        this.fetchSessions()
      })
      .catch((error) => {
        console.log('An error occured when trying to book into the session.', error)
      })
  }

  fetchSessions() {
    this.changeLoading()
    api.get('/sessions')
      .then((response) => {
        this.setState({
          sessions: response.data
        })
        this.changeLoading()
      })
      .catch((error) => {
        console.log('An error occured retrieving sessions.', error)
      })
  }

  render() {
    const { week, days, filterDay, filterClass } = this.state;
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
                                        handleItemClick={this.props.handleItemClick}
                                        handleLeaveSession={this.handleLeaveSession} />)
      } else {
        tableDisplay = week.filter(dayDate => filterDay.some(day => dayDate.includes(day)))
                            .map(day => <SessionsTable
                                          key={day}
                                          day={day}
                                          sessions={this.matchSessions(day)}
                                          currentUser={this.props.currentUser}
                                          handleJoinSession={this.handleJoinSession}
                                          handleItemClick={this.props.handleItemClick}
                                          handleLeaveSession={this.handleLeaveSession} />)
      }
    }

    return (
      <div className='timetable-component'>
        <h1>Book Classes</h1>
        <Grid divided='vertically' stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment>
                <Grid className='radio-grid'>
                  <Grid.Row columns={6} className='radio-row'>
                      {days.map(day => <DayRadioFilters
                              handleCheck={this.filterByDay}
                              filterDay={filterDay}
                              value={day}
                              label={day} />)}
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <ClassSelectorDropdown
                  handleCheck={this.filterByClass}
                  filterClass={filterClass} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
