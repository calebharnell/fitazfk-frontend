import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import VideoEmbed from './VideoEmbed';
import { Image, Segment, Button, Divider  } from 'semantic-ui-react';
import fitazkGymExternal from './images/fitazfk-gym-external.png'

class Home extends Component {
  render() {
    return (
      <div className='home-component'>
        <Segment inverted className='home-container'>
          <Image src={fitazkGymExternal} size='massive' centered fluid rounded/>
          <Divider />
            <h2>DO YOU WANT TO GET FITAZFK?</h2>
            <h4>Fitaz Functional Kinetics, Kangaroo Point is the ultimate place to achieve your fitness goals -
            whatever that may be.</h4>
            <h4>Feeling comfortable amongst state of the art equipment, whilst taking your body to your next level is what we’re all about.</h4>
          <Divider />
            <Button primary><h1>Click here to register for your free class!</h1></Button>
          <Divider />
            <h2>WE ARE FITAZFK</h2>
            <h4>FitazFK Gym was founded by 3 fitness experts.</h4>
            <h4>Their passion for fitness is felt throughout the gym, and every ounce of their knowledge and enthusiasm is transferred to every member. No one is missed.</h4>
            <h3>HOW WE WORK...</h3>
            <h4>Fitaz Functional Kinetics (or Functional Movement) is the foundation of our classes and training. No more spending hours in the gym! Our unique, proven method offers fast and efficient training combined with a clean and achievable nutritional plan.  </h4>
          <Divider />
          <h2>FITAZFK ON 7 NEWS</h2>
          <VideoEmbed />
        </Segment>
        <ContactDetails />
      </div>
    );
  }
}

export default Home;
