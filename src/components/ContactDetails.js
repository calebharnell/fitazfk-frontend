import React from 'react';
import { Grid, Icon, Container, Segment } from 'semantic-ui-react';
import MapsEmbed from './MapsEmbed';

const ContactDetails = () => (
  <div className='ContactDetails'>
    <Grid columns={3} divided stackable>
      <Grid.Row>
        <Grid.Column>
          <Icon className='contact-icon' name='phone' size='huge' />
          <Container>
            <p>(07) 3108 9531</p>
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Icon className='contact-icon' name='mail' size='huge' />
          <Container>
            <p>gym@fitazfk.com</p>
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Icon className='contact-icon' name='clock' size='huge' />
          <Container>
            <p>Mon to Fri: 5am - 9pm</p>
            <p>Sat & Sun: 6am - 8pm</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal' >
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column verticalAlign='middle' width={10}>
          <Segment inverted color='black'>
            <Icon className='contact-icon' name='marker' size='huge' />
            <Container>
              <p>101 Main Street, Kangaroo Point</p>
              <p>Brisbane QLD 4169</p>
              <MapsEmbed />
            </Container>
          </Segment>

        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default ContactDetails;
