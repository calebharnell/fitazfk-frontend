import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { setJwt } from '../api/init';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import BookClasses from './BookClasses';
import Gallery from './Gallery';
import Contact from './Contact';
import Logo from './Logo';

class NavBar extends Component {
  state = {
    activeItem: 'home',
    loggedIn: null
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  handleLogOut = () => {
    this.setState({
      loggedIn: null
    })
    localStorage.removeItem('token')
  }

  handleLoginResponse = (response) => {
    this.setState({
      loggedIn: response.data.token,
    })
  }

  render() {
    const { activeItem, loggedIn } = this.state

    let loggedInButtons = null
    if (!loggedIn) {
      loggedInButtons = <Menu secondary="secondary"> 
                          <Menu.Item as={Link} to='/sign-up' name='sign-up' active={activeItem === 'sign-up'} onClick={this.handleItemClick}/>
                          <Menu.Item as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/> 
                        </Menu>
    } else {
      loggedInButtons = <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
    }

    return (
      <Router>
        <div className="NavBar">
          <Segment className="navbar">
            <Logo />
            <Menu secondary="secondary">
              <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
              {loggedInButtons}
              <Menu.Item as={Link} to='/book-classes' name='book-classes' active={activeItem === 'book-classes'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
            </Menu>
          </Segment>

          <Route exact="exact" path="/" component={Home}/>
          <Route
            path="/sign-up"
            render={(routeProps) => (
              <SignUp {...routeProps} handleLoginResponse={this.handleLoginResponse} />
            )}
          />
          <Route path="/login" component={Login}/>
          <Route path="/book-classes" component={BookClasses}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    token && setJwt(token) 
    this.setState({
      loggedIn: token
    })
  }
}

export default NavBar;
