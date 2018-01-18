import React, { Component } from 'react';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';

const SessionRow = ({ session, currentUser, handleJoinSession, handleLeaveSession }) => {
	let joinButton = null
	if (session.attendees.some(attendee => attendee._id === currentUser._id)) {
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

 return (
 	<Table.Body>
 	  <Table.Row>
 	    <Table.Cell>{session.time}</Table.Cell>
 	    <Table.Cell>
 				{session.name}
 				<Modal trigger={<Button icon color='white' size='small'><Icon name='info circle' size='large' /></Button>}>
 					<Modal.Header>{session.name}</Modal.Header>
 					<Modal.Content>
 						<Modal.Description>
 							<p>Class Description.  Man braid hammock crucifix offal deep v echo park XOXO meh mumblecore pitchfork gastropub affogato intelligentsia listicle. Tacos semiotics mustache tumblr fashion axe 3 wolf moon cold-pressed glossier. Etsy typewriter kitsch helvetica lyft umami hella. Prism etsy waistcoat readymade lyft chillwave, squid subway tile retro slow-carb meh. Chicharrones glossier fanny pack, cliche viral aesthetic iceland kitsch migas salvia williamsburg slow-carb enamel pin vexillologist.</p>
 						</Modal.Description>
 					</Modal.Content>
 				</Modal>

 			</Table.Cell>
 	    <Table.Cell>{session.instructor}</Table.Cell>
 	    <Table.Cell>{`${session.attendees.length} / ${session.maxAttendees}`}</Table.Cell>
 	    <Table.Cell>{joinButton}</Table.Cell>
 	  </Table.Row>
 	</Table.Body>
 	)
}

export default SessionRow;
