import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react'
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
      redirectAfterSignup: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.passwordValue === this.state.confirmPasswordValue){
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
      })
    } else {
      alert('Your password fields do not match.')
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
    	<Grid centered columns={2}>
	    	<Grid.Column>
		      <Form className="signup-form" onSubmit={this.handleSubmit}>
		      	<Form.Group>
		          <Form.Input label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={16} />
		        </Form.Group>  
		        <Form.Group>
		          <Form.Input label='First Name' placeholder='First Name' name='firstName' value={firstName} onChange={this.handleChange} width={16} />
		        </Form.Group>
		        <Form.Group>
		          <Form.Input label='Last Name' placeholder='Last Name' name='lastName' value={lastName} onChange={this.handleChange} width={16} />
		        </Form.Group>
		        <Form.Group>
		          <Form.Input label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} width={16} />
		        </Form.Group>
		        <Form.Group>
		          <Form.Input label='Confirm Password' placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} width={16} />
		        </Form.Group>  
		        <Button type='submit'>Submit</Button>
		      </Form>
	      </Grid.Column>
      </Grid>
    );
  }
}

export default SignUp;
