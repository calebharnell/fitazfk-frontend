import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { api } from '../api/init';

class CreateClassModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: props.name || '',
      instructor: props.instructor || '',
      day: props.day || '',
      time: props.time || '',
      floor: props.floor || ''
    }
  }





	handleChange = (event) => {
	  this.setState({
	    [event.target.name]: event.target.value
	  })
	}

  handleSave = () => {
    this.props.onSave(this.state)
  }

	render() {
		const { name, instructor, day, time, floor } = this.state

		return (

		  <Modal open={true} onClose={this.props.onCancel} >
		    <Modal.Header>Create New Class</Modal.Header>
		    <Modal.Content scrolling>

		      <Modal.Description>
  		      <Form className="create-class-form" onSubmit={this.handleSave}>
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
  		        <Button type="submit">Submit</Button>
  		        <Button onClick={this.props.onCancel} color='red'>
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
