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
	
	handleAttendSession = () => {
		let token = localStorage.getItem('token')
    token && setJwt(token) 
		api.patch(`/sessions/${this.props.id}`, {
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
  render() {
		let attendButton = null
		if (this.state.attendees.includes(this.props.currentUser)) {
			attendButton = <Button size='mini'>Leave</Button>
		} else {
			attendButton = <Button size='mini' onClick={this.handleAttendSession}>Join</Button>
		}

		return (
			<Table.Body>
			  <Table.Row>
			    <Table.Cell>{this.props.time}</Table.Cell>
			    <Table.Cell>{this.props.name}</Table.Cell>
			    <Table.Cell>{this.props.instructor}</Table.Cell>
			    <Table.Cell>{attendButton}</Table.Cell>
			  </Table.Row>
			</Table.Body>
		)
	}
}

export default SessionRow;

