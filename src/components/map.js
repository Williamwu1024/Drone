import React, { Component } from 'react';
import { connect } from "react-redux";
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapExample = withGoogleMap(props => {return(
    <GoogleMap
      defaultCenter = { { lat: 29.766083, lng:-95.366302 } }
      defaultZoom = { 5 } 
    >
      {props.children}
    </GoogleMap>
)});

class Map extends Component {
   render() {
    const {
        latitude,
        longitude,
      } = this.props;
   
   return(
      <div>       
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        >
            <Marker
            position={{ lat: latitude, lng: longitude }}
            />
        </GoogleMapExample>
      </div>
   );
   }
};

const mapState = (state, ownProps) => {
    const {
      latitude,
      longitude
    } = state.drone

    return {
      latitude,
      longitude
    };
  };

export default connect(
    mapState,
    null
  )(Map);
