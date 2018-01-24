import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SessionRow = ({ session, currentUser, handleJoinSession, handleLeaveSession, handleItemClick }) => {
	let joinButton = null
	if (currentUser) {
		if (session.attendees.some(attendee => attendee._id === (currentUser._id))) {
			joinButton = <Button secondary
										size='mini'
										onClick={handleLeaveSession}>
											Leave
										</Button>
		} else {
			joinButton = <Button primary
										size='mini'
										onClick={handleJoinSession}>
											Join
										</Button>
		}
	} else {
		joinButton = <Button primary
									size='mini'
									as={Link}
									to='/login'
									name='login'
									onClick={handleItemClick}>Login</Button>
	}

 return (
 	<Table.Body>
 	  <Table.Row>
 	    <Table.Cell>{session.time}</Table.Cell>
 	    <Table.Cell>{session.name}</Table.Cell>
 	    <Table.Cell>{session.instructor}</Table.Cell>
 	    <Table.Cell>{`${session.attendees.length} / ${session.maxAttendees}`}</Table.Cell>
 	    <Table.Cell>{joinButton}</Table.Cell>
 	  </Table.Row>
 	</Table.Body>
 	)
}

export default SessionRow;
