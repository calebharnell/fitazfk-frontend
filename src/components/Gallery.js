import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import InstagramEmbed from 'react-instagram-embed';

class Gallery extends Component {
  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <Grid container columns={3} doubling stackable>
          <Grid.Column>
              <InstagramEmbed
                url='https://instagr.am/p/Bb-aTR7Hw5D/'
                maxWidth={400}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/Ba8fqApHaw-/'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/Ba76QE5n_ci/'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/BbnB06FnYJS'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/Ba9wMn9nibr/'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/Ba3bfKVncw7/'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/BbO-POknGHT'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://www.instagr.am/p/Bbivx5bns0O'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
          <Grid.Column>
            <InstagramEmbed
              url='https://instagr.am/p/BdT_VcJHT34'
              maxWidth={400}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Gallery;
