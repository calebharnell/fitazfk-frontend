import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const SessionRow = ({ session, currentUser, handleJoinSession, handleLeaveSession }) => {
	let joinButton = null
	if (currentUser) {
		if (session.attendees.some(attendee => attendee._id === (currentUser._id))) {
			joinButton = <Button 
										size='mini' 
										onClick={handleLeaveSession}>
											Leave
										</Button>
		} else {
			joinButton = <Button 
										size='mini' 
										onClick={handleJoinSession}>
											Join
										</Button>
		}
	} else {
		joinButton = <p>Login to join.</p>
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
