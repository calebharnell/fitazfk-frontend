import React, { Component } from 'react';
import { api, setJwt } from '../api/init';

class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      signupDate: ''
    }
  }

  render() {
    const { firstName, lastName, email, signupDate } = this.state;

    return (
      <div>
        <h1>Account</h1>
        <p>Welcome, {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <p>Joined On: {signupDate}</p>
      </div>
    );
  }
  
  componentDidMount(){
    let token = localStorage.getItem('token')
    token && setJwt(token)
    api.get(`/user/${this.props.currentUser}`)
      .then((response) => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          signupDate: response.data.signupDate
        })
      })
      .catch((error) => {
        console.log('An error occured retrieving user.', error)
      })
  }
}

export default Account;
