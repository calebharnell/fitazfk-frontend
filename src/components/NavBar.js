import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import BookClasses from './BookClasses';
import Gallery from './Gallery';
import Contact from './Contact';
import Logo from './Logo';

class NavBar extends Component {
  state = {
    activeItem: 'home'
  }
  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Router>
        <div className="NavBar">
          <Segment className="navbar">
            <Logo />
            <Menu secondary="secondary">
              <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/sign-up' name='sign-up' active={activeItem === 'sign-up'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/book-classes' name='book-classes' active={activeItem === 'book-classes'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
            </Menu>
          </Segment>

          <Route exact="exact" path="/" component={Home}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/book-classes" component={BookClasses}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}

export default NavBar;
