import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { setJwt } from '../api/init';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import BookClasses from './BookClasses';
import Classes from './Classes';
import Gallery from './Gallery';
import Contact from './Contact';
import Account from './Account';
import AdminClasses from './AdminClasses';
import AdminUsers from './AdminUsers';
import Logo from './Logo';
import jwtDecode from 'jwt-decode';

class AppRouter extends Component {
  state = {
    activeItem: 'home',
    loggedIn: null,
    currentUser: null,
    tokenExp: null,
    admin: false
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  handleLogOut = () => {
    this.setState({
      activeItem: 'login',
      loggedIn: null,
      currentUser: null,
      tokenExp: null,
      admin: false
    })
    localStorage.removeItem('token');
    window.location.reload();
  }

  handleLoginResponse = (response) => {
    const decodedToken = jwtDecode(response.data.token)
    this.setState({
      loggedIn: response.data.token,
      tokenExp: decodedToken.exp,
      currentUser: decodedToken.sub,
      admin: response.data.admin || false
    })
  }

  render() {
    const { activeItem, loggedIn, currentUser } = this.state;

    let loggedInButtons = null
    if (!loggedIn) {
      loggedInButtons = <Menu secondary stackable>
                          <Menu.Item as={Link} to='/sign-up' name='sign-up' active={activeItem === 'sign-up'} onClick={this.handleItemClick}/>
                          <Menu.Item as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
                        </Menu>
    } else if (loggedIn && this.state.admin) {
      loggedInButtons = <Menu secondary stackable>
                          <Menu.Item as={Link} to='/admin/classes' name='adminClasses' active={activeItem === 'adminClasses'} onClick={this.handleItemClick}/>
                          <Menu.Item as={Link} to='/admin/users' name='adminUsers' active={activeItem === 'adminUsers'} onClick={this.handleItemClick}/>
                          <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                          <Menu.Item as={Link} to='/logout' name='logout' onClick={this.handleLogOut}/>
                        </Menu>
    } else {
      loggedInButtons = <Menu secondary stackable>
                          <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                          <Menu.Item as={Link} to='/login' name='logout' active={activeItem === 'login'} onClick={this.handleLogOut}/>
                        </Menu>
    }

    return (
      <Router>
        <div className="NavBar">
          <Segment className="navbar">
            <Menu secondary stackable>
              <Menu.Item>
                <Logo />
              </Menu.Item>
              <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/book-classes' name='book-classes' active={activeItem === 'book-classes'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/classes' name='classes' active={activeItem === 'classes'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
              <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
              {loggedInButtons}
            </Menu>
          </Segment>

          <Route exact path="/" component={Home}/>
          <Route
            path="/sign-up"
            render={(routeProps) => (
              <SignUp {...routeProps} handleLoginResponse={this.handleLoginResponse} />
            )}
          />
          <Route
            path="/login"
            render={(routeProps) => (
              <Login {...routeProps} handleLoginResponse={this.handleLoginResponse} handleSetAdmin={this.handleSetAdmin} />
            )}
          />
          <Route
            path="/book-classes"
            render={(routeProps) => (
              <BookClasses {...routeProps} currentUser={currentUser} />
            )}
          />
          <Route path="/classes" component={Classes}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/admin/classes" component={AdminClasses}/>
          <Route path="/admin/users" component={AdminUsers}/>
          <Route
            path="/account"
            render={(routeProps) => (
              <Account {...routeProps} currentUser={currentUser} />
            )}
          />
          <Route exact path="/logout" render={() => (
            <Redirect to="/login"/>
            )}/>
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
    if (token) {
      const decodedToken = jwtDecode(token)
      console.log(decodedToken)
      this.setState({
        tokenExp: decodedToken.exp,
        currentUser: decodedToken.sub
      })
    }
  }
}

export default AppRouter;
