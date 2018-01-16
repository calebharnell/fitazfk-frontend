import React, { Component } from 'react';
import { Grid, Button, Form, Modal } from 'semantic-ui-react'
import { api, setJwt } from '../api/init';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	    email: '',
	    password: '',
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
    api.post('/auth', {
      email: this.state.email,
      password: this.state.password
	    })
	    .then((response) => {
	      setJwt(response.data.token)
	      this.setState({
	      	redirectAfterSignup: true
	      })
	      this.props.handleLoginResponse(response)
	    })
	    .catch((error) => {
				this.toggleErrorModal('Incorrect password, please try again.')
	      console.log('An error occured when trying to login.', error)
	    })
	  }

	render() {
		const { email, password, redirectAfterSignup } = this.state

	  if (redirectAfterSignup) {
	    return (
	      <Redirect to={'/'}/>
	    )
	  }

    return (
			<div className='login-container'>
				<h1>Log In</h1>
	    	<Grid centered columns={2}>
		    	<Grid.Column>
			      <Form className="login-form" onSubmit={this.handleSubmit}>
			      	<Form.Group>
			          <Form.Input type='email' autoFocus required label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={16} />
			        </Form.Group>
			        <Form.Group>
			          <Form.Input  minLength ='8' type='password' required label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} width={16} />
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

export default Login;
