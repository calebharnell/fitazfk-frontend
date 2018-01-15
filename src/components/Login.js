import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react'
import { api, setJwt } from '../api/init';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	    email: '',
	    password: '',
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
    api.post('/auth', {
      email: this.state.email,
      password: this.state.password
	    })
	    .then((response) => {
				console.log(response.data)
				
	      setJwt(response.data.token)
	      this.setState({
	      	redirectAfterSignup: true
	      })
	      this.props.handleLoginResponse(response)
	    })
	    .catch((error) => {
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
    	<Grid centered columns={2}>
	    	<Grid.Column>
		      <Form className="login-form" onSubmit={this.handleSubmit}>
		      	<Form.Group>
		          <Form.Input label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} width={16} />
		        </Form.Group>
		        <Form.Group>
		          <Form.Input label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} width={16} />
		        </Form.Group>
		        <Button type='submit'>Submit</Button>
		      </Form>
	      </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
