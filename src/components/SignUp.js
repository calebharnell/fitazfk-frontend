import React, { Component } from 'react';
import { Grid, Button, Form, Modal } from 'semantic-ui-react'
import { api, setJwt } from '../api/init';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirectAfterSignup: false,
      errorModalOpen: false,
      errorModalMessage: ''
    }
  }

  toggleErrorModal = (message) => {
    this.setState(prevState => ({
      errorModalOpen: !this.state.errorModalOpen,
      errorModalMessage: message
    }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      api.post('/auth/register', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        active: true
      })
      .then((response) => {
        setJwt(response.data.token)
        this.setState({
        	redirectAfterSignup: true
        })
        this.props.handleLoginResponse(response)
      })
      .catch((error) => {
        console.log('An error occured when trying to register.', error)
        this.toggleErrorModal('This email is already registered.')
      })
    } else {
      this.toggleErrorModal('Your passwords do not match, please try again.')
    }
  }
  render() {
  	const { firstName, lastName, email, password, confirmPassword, redirectAfterSignup } = this.state

    if (redirectAfterSignup) {
      return (
        <Redirect to={'/'}/>
      )
    }

    return (
      <div className="sign-up-container">
        <h1>Sign Up</h1>
      	<Grid centered columns={2}>
  	    	<Grid.Column>
  		      <Form className="signup-form" onSubmit={this.handleSubmit}>
  		      	<Form.Group>
  		          <Form.Input type='email' autoFocus required label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input required label='First Name' placeholder='First Name' name='firstName' value={firstName} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input required label='Last Name' placeholder='Last Name' name='lastName' value={lastName} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input minLength ='8' type='password' required label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Form.Group>
  		          <Form.Input minLength ='8' type='password' error={this.state.password !== this.state.confirmPassword} required label='Confirm Password' placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} width={16} />
  		        </Form.Group>
  		        <Button type='submit' color='blue'>Submit</Button>
  		      </Form>
  	      </Grid.Column>
        </Grid>
        <Modal size='mini' open={this.state.errorModalOpen} onClose={this.toggleErrorModal}>
          <Modal.Content>
            <p>{this.state.errorModalMessage}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='blue' onClick={this.toggleErrorModal}>
              Ok
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
