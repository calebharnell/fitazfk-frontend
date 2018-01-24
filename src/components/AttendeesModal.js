import React from 'react';
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react';


const AttendeesModal = ({onCancel, name, instructor, day, attendees, onRemove, sessionId}) => (
	<Modal open={true} onClose={onCancel} >
		<Modal.Header>{name} - {instructor} - {day}</Modal.Header>
		<Modal.Content image scrolling>
			<Modal.Description>
				<Header>Attendees</Header>
				<List divided verticalAlign='middle'>
					{attendees.map(attendee => (
						<List.Item>
							<List.Content floated='right'>
								<Button onClick={() => onRemove(sessionId, attendee._id)}>Remove</Button>
							</List.Content>
							<List.Content>
								{attendee.firstName} {attendee.lastName}
							</List.Content>
						</List.Item>
						))}
				 </List>
			</Modal.Description>
		</Modal.Content>
		<Modal.Actions>
			<Button onClick={onCancel} primary>
				Done <Icon name='right chevron' />
			</Button>
		</Modal.Actions>
	</Modal>
)

export default AttendeesModal;
