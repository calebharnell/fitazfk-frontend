import React from 'react';
import { Embed } from 'semantic-ui-react';
import placeholder from './images/placeholder.png'

const VideoEmbed = () => (
  <div className="home-embed">
    <Embed
      id='-T8RaPRSSrw'
      placeholder={placeholder}
      source='youtube'
    />
  </div>
)

export default VideoEmbed;
