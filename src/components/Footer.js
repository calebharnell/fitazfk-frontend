import React, { Component } from 'react';
import { Segment, Icon } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Segment>
          <h3>Connect with us on social media!</h3>
          <Icon name='facebook square' size='huge' link onClick={() => window.open('https://www.facebook.com/Fitazfk/', '_blank')}/>
          <Icon name='instagram' size='huge' link onClick={() => window.open('https://www.instagram.com/fitazfk/', '_blank')}/>
          <Icon name='youtube square' size='huge' link onClick={() => window.open('https://www.youtube.com/channel/UC_3G99GSLJlRBhhR8Gs5hTw', '_blank')}/>
          <Icon name='pinterest square' size='huge' link onClick={() => window.open('https://au.pinterest.com/fitazfk/', '_blank')}/>
          <Segment>
            <p>©2018 Fitaz Health Pty Ltd</p>
          </Segment>
        </Segment>
      </div>
    )
  }
}

export default Footer;
