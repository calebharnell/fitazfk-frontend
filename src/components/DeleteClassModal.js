import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteClassModal = ({onCancel, onDelete}) => (
	<Modal open={true} onClose={onCancel} size='small'>
		<Header icon='delete' content='Delete All Instances Of This Class' />
		<Modal.Content>
			<p>Are you sure you want to delete this class? Once this is done you cannot reverse this action.</p>
		</Modal.Content>
		<Modal.Actions>
			<Button onClick={onCancel} secondary>
				<Icon name='remove' /> No
			</Button>
			<Button onClick={onDelete} primary>
				<Icon name='checkmark' /> Yes
			</Button>
		</Modal.Actions>
	</Modal>
)

export default DeleteClassModal;
