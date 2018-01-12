import React, { Component } from 'react';
import { api, setJwt } from '../api/init';
import { Table, Button } from 'semantic-ui-react'

class SessionRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	    attendees: this.props.attendees
	  }
	}
	
	handleJoinSession = () => {
		let token = localStorage.getItem('token')
    token && setJwt(token) 
		api.patch(`/sessions/join`, {
        _id: this.props.id
      })
		  .then((response) => {
		    this.setState({
		    	attendees: [...this.state.attendees, this.props.currentUser]
		    })
		  })
		  .catch((error) => {
		    console.log('An error occured when trying to book into the session.', error)
		  })
	}

	handleLeaveSession = () => {
		let token = localStorage.getItem('token')
    token && setJwt(token) 
		api.patch(`/sessions/leave`, {
        _id: this.props.id
      })
		  .then((response) => {
	  			this.setState({
	  		  	attendees: this.state.attendees.filter(attendee => attendee !== this.props.currentUser)
	  		  })
		  	}
		  )
		  .catch((error) => {
		    console.log('An error occured when trying to book into the session.', error)
		  })
	}

  render() {
		let joinButton = null
		if (this.state.attendees.includes(this.props.currentUser)) {
			joinButton = <Button size='mini' onClick={this.handleLeaveSession}>Leave</Button>
		} else {
			joinButton = <Button size='mini' onClick={this.handleJoinSession}>Join</Button>
		}

		return (
			<Table.Body>
			  <Table.Row>
			    <Table.Cell>{this.props.time}</Table.Cell>
			    <Table.Cell>{this.props.name}</Table.Cell>
			    <Table.Cell>{this.props.instructor}</Table.Cell>
			    <Table.Cell>{joinButton}</Table.Cell>
			  </Table.Row>
			</Table.Body>
		)
	}
}

export default SessionRow;

