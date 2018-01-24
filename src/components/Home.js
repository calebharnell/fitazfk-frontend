import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import VideoEmbed from './VideoEmbed';
import { Parallax } from 'react-parallax';
import { Image, Segment, Button, Divider, Header } from 'semantic-ui-react';
import fitazfkGymRings from './images/fitazfk-gym-rings.jpg';
import fitazfkGymBoxing from './images/fitazfk-gym-boxing.jpg';
import fitazfkGymFoyer from './images/fitazfk-gym-foyer.jpg';
import fitazfkLogo from './images/fitazfk-logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='home-component'>
        <Parallax
          bgImage={fitazfkGymBoxing}
          bgImageAlt="the cat"
          strength={200}
        >
          <div style={{ height: '800px' }} className='logo'>
            <Image src={fitazfkLogo} size='large' centered className='logo-background' />
          </div>
        </Parallax>
        <Parallax>
          <Segment inverted className='home-segment'>
            <Header as='h1'>DO YOU WANT TO GET FITAZFK?</Header>
            <p>Fitaz Functional Kinetics, Kangaroo Point is the ultimate place to achieve your fitness goals -
            whatever that may be.</p>
            <p>Feeling comfortable amongst state of the art equipment, whilst taking your body to your next level is what we’re all about.</p>
            <Divider />
            <Button primary as={Link} to='/sign-up' name='sign-up' onClick={this.props.handleItemClick}><h2>Click here to register for your free class!</h2></Button>
            <Divider />
            <Header as='h1'>FITAZFK ON 7 NEWS</Header>
            <VideoEmbed />
          </Segment>
        </Parallax>
        <Parallax
          bgImage={fitazfkGymRings}
          bgImageAlt="the cat"
          strength={200}>
          <div style={{ height: '800px' }} />
        </Parallax>
        <Parallax>
          <Segment inverted className='home-segment middle-block'>
            <Header as='h1'>WE ARE FITAZFK</Header>
            <p>FitazFK Gym was founded by 3 fitness experts.</p>
            <p>Their passion for fitness is felt throughout the gym, and every ounce of their knowledge and enthusiasm is transferred to every member.</p>
            <p>No one is missed.</p>
            <Divider />
            <Header as='h1'>HOW WE WORK...</Header>
            <p>Fitaz Functional Kinetics (or Functional Movement) is the foundation of our classes and training. No more spending hours in the gym!</p>
            <p>Our unique, proven method offers fast and efficient training combined with a clean and achievable nutritional plan.</p>
          </Segment>
        </Parallax>
        <Parallax
          bgImage={fitazfkGymFoyer}
          bgImageAlt="the cat"
          strength={200}>
          <div style={{ height: '800px' }} />
        </Parallax>
        <Parallax>
          <Segment className='contact-segment'>
            <Divider />
            <ContactDetails />
          </Segment>
        </Parallax>
      </div>
    );
  }
}

export default Home;
