import React from 'react';
import { Embed } from 'semantic-ui-react';

const MapsEmbed = () => (
  <Embed
    className='google-map'
    defaultActive={true}
    url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14160.356775169997!2d153.02634690288758!3d-27.466482423057933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1e3273fae5%3A0x45340a8150d073c6!2sFitazFK+Gym!5e0!3m2!1sen!2sau!4v1515546215532'
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    source='googlemaps'
  />
)

export default MapsEmbed
