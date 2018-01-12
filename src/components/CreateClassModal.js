import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { api } from '../api/init';

class CreateClassModal extends Component {

	state = {
		name: '',
		instructor: '',
		day: '',
		time: '',
		floor: '',
		modalActive: false
	}

	handleChange = (event) => {
	  this.setState({
	    [event.target.name]: event.target.value
	  })
	}

	handleSubmit = (event) => {
	  event.preventDefault();
    api.post('/sessions', {
      name: this.state.name,
      instructor: this.state.instructor,
      day: this.state.day,
      time: this.state.time,
      floor: this.state.floor
    })
    .then(() => {
    	this.setState({
    		modalActive: false
    	})
    })
    .catch((error) => {
      console.log('An error occured when trying to create class.', error)
    })
	}

	handleModal = () => {
		this.setState(prevState => ({
			modalActive: !this.state.modalActive
		}))
	}

	render() {
		const { name, instructor, day, time, floor, modalActive } = this.state

		return (

		  <Modal open={modalActive} trigger={<Button onClick={this.handleModal}>Create New Class</Button>} onClose={this.handleModal} >
		    <Modal.Header>Create New Class</Modal.Header>
		    <Modal.Content scrolling>

		      <Modal.Description>
  		      <Form className="create-class-form" onSubmit={this.handleSubmit}>
  		      	<Form.Group>
  		          <Form.Input label='Class Type' name='name' value={name} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input label='Instructor' name='instructor' value={instructor} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input label='Day' name='day' value={day} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input label='Time' name='time' value={time} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input label='Floor' name='floor' value={floor} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Button type='submit'>Submit</Button>
  		        <Button onClick={this.handleModal} color='red'>
  		          Cancel
  		        </Button>
  		      </Form>
		      </Modal.Description>

		    </Modal.Content>
		  </Modal>
		)
	}
}

export default CreateClassModal
