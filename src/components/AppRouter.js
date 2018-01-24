import React, { Component } from 'react';
import { Menu, Segment, Icon, Button } from 'semantic-ui-react';
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
import LoginMessage from './LoginMessage';
import Logo from './Logo';
import jwtDecode from 'jwt-decode';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      loggedIn: null,
      currentUser: null,
      admin: false,
      isDesktop: true,
      mobileNavbarOpen: false
    }
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  updatePredicate() {
    this.setState({
      isDesktop: window.innerWidth > 1250,
      mobileNavbarOpen: false
    });
  }

  handleItemClick = (e, {name}) => {
    this.setState({
      activeItem: name,
      mobileNavbarOpen: false
    })
  }

  handleLogOut = () => {
    this.setState({
      activeItem: 'login',
      loggedIn: null,
      currentUser: null,
      admin: false,
      mobileNavbarOpen: false
    })
    localStorage.removeItem('token');
    window.location.reload();
  }

  toggleMobileNavbar = () => {
    this.setState({
      mobileNavbarOpen: !this.state.mobileNavbarOpen
    })
  }

  handleLoginResponse = (response) => {
    const decodedToken = jwtDecode(response.data.token)
    this.setState({
      loggedIn: response.data.token,
      currentUser: {
          _id: decodedToken.sub,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email
        },
      admin: decodedToken.role || false
    })
  };

  render() {

    const { activeItem, loggedIn, currentUser, isDesktop, admin, mobileNavbarOpen } = this.state;

    let responsiveNavbar = null;
    let mobileNavDropdown = null;

    if (isDesktop && !loggedIn) {
      responsiveNavbar =  <Menu secondary>
                            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/classes' name='classes' active={activeItem === 'classes'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/book-classes' name='timetable' active={activeItem === 'timetable'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/sign-up' name='sign-up' active={activeItem === 'sign-up'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
                          </Menu>
    } else if (isDesktop && admin) {
      responsiveNavbar =  <Menu secondary>
                            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/classes' name='classes' active={activeItem === 'classes'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/book-classes' name='timetable' active={activeItem === 'timetable'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/admin/classes' name='adminClasses' active={activeItem === 'adminClasses'} onClick={this.handleItemClick} color='blue'/>
                            <Menu.Item as={Link} to='/admin/users' name='adminUsers' active={activeItem === 'adminUsers'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/logout' name='logout' onClick={this.handleLogOut}/>
                          </Menu>
    } else if (isDesktop && loggedIn) {
      responsiveNavbar =  <Menu secondary>
                            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/classes' name='classes' active={activeItem === 'classes'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/book-classes' name='timetable' active={activeItem === 'timetable'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/logout' name='logout' onClick={this.handleLogOut}/>
                          </Menu>
    } else {
      mobileNavDropdown = <div className='mobile-nav-dropdown'>
                            <Segment>
                              <Button secondary fluid size='large' icon labelPosition='right' onClick={this.toggleMobileNavbar}>Menu<Icon name='chevron down' size='small'/></Button>
                            </Segment>
                          </div>
    };

    let mobileNavbarContents = null;
    if (!isDesktop && !loggedIn && mobileNavbarOpen) {
      mobileNavbarContents = <Menu secondary vertical fluid>
                              <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/classes' name='class-descriptions' active={activeItem === 'class-descriptions'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/book-classes' name='timetable' active={activeItem === 'timetable'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/sign-up' name='sign-up' active={activeItem === 'sign-up'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
                            </Menu>
    } else if (!isDesktop && admin && mobileNavbarOpen) {
      mobileNavbarContents = <Menu secondary vertical fluid>
                              <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/classes' name='class-descriptions' active={activeItem === 'class-descriptions'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/book-classes' name='timetable' active={activeItem === 'timetable'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/admin/classes' name='adminClasses' active={activeItem === 'adminClasses'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/admin/users' name='adminUsers' active={activeItem === 'adminUsers'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                              <Menu.Item as={Link} to='/login' name='logout' active={activeItem === 'login'} onClick={this.handleLogOut}/>
                            </Menu>
    } else if (!isDesktop && loggedIn && mobileNavbarOpen)
    mobileNavbarContents = <Menu secondary vertical fluid>
                            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/classes' name='class-descriptions' active={activeItem === 'class-descriptions'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/book-classes' name='timetable' active={activeItem === 'timetable'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/gallery' name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to='/login' name='logout' active={activeItem === 'login'} onClick={this.handleLogOut}/>
                          </Menu>
    return (
        <Router>
          <div className="NavBar">
            <Segment className="navbar">
              <Menu secondary fluid>
                <Menu.Item className='logo-nav'>
                  <Logo/>
                </Menu.Item>
                {responsiveNavbar}
              </Menu>
                {mobileNavDropdown}
                {mobileNavbarContents}
            </Segment>
            <div>
              {this.state.loggedIn && <LoginMessage
                                        currentUser={this.state.currentUser} />}
            </div>
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <Home {...routeProps} handleItemClick={this.handleItemClick} />
              )}
            />
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
                <BookClasses {...routeProps}
                  currentUser={currentUser}
                  handleItemClick={this.handleItemClick} />
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
              <Redirect to="/"/>
              )}/>
          </div>
        </Router>
    )
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    let token = localStorage.getItem('token')
    if (!token) {
      return;
    }
    token && setJwt(token)
    const decodedToken = jwtDecode(token)
    if (isTokenExpired(decodedToken.exp)) {
      this.handleLogOut()
    } else {
      this.setState({
        loggedIn: token,
        currentUser: {
          _id: decodedToken.sub,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email
        },
        admin: decodedToken.role || false
      })
    }

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

}

export default AppRouter;

const isTokenExpired = (tokenExp) => Math.floor(Date.now() / 1000) > tokenExp;
