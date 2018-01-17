import React, { Component } from 'react';
import { api } from '../api/init';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';

class SessionRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	    attendees: this.props.attendees || []
	  }
	}

	handleJoinSession = () => {
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
			    <Table.Cell>
						{this.props.name}
						<Modal trigger={<Button icon color='white' size='small'><Icon name='info circle' size='large' /></Button>}>
							<Modal.Header>{this.props.name}</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<p>Class Description.  Man braid hammock crucifix offal deep v echo park XOXO meh mumblecore pitchfork gastropub affogato intelligentsia listicle. Tacos semiotics mustache tumblr fashion axe 3 wolf moon cold-pressed glossier. Etsy typewriter kitsch helvetica lyft umami hella. Prism etsy waistcoat readymade lyft chillwave, squid subway tile retro slow-carb meh. Chicharrones glossier fanny pack, cliche viral aesthetic iceland kitsch migas salvia williamsburg slow-carb enamel pin vexillologist.</p>
								</Modal.Description>
							</Modal.Content>
						</Modal>

					</Table.Cell>
			    <Table.Cell>{this.props.instructor}</Table.Cell>
			    <Table.Cell>{joinButton}</Table.Cell>
			  </Table.Row>
			</Table.Body>
		)
	}
}

export default SessionRow;
