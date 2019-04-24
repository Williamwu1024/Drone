import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChipRaw from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";


const cardStyles = theme => ({
  root: {
    background: theme.palette.secondary.main
  },
  label: {
    color: theme.palette.primary.main
  }
});
const Chip = withStyles(cardStyles)(ChipRaw);

class Weather extends Component {

  componentDidMount() {
    console.log(this.props.latitude)
      var that = this;
      setInterval(function(){
        that.props.onLoad(that.props.latitude,that.props.longitude);
      },3000);  
  } 

  render() {
    
    const {
      loading,
      name,
      latitude,
      longitude,
      weather_state_name,
      temperatureinFahrenheit,
    } = this.props;
    
    // if (loading) return <LinearProgress />;
    return (
        <Chip
          label={`Weather in ${name}: ${weather_state_name} and ${temperatureinFahrenheit}°`} 
        />
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    latitude,
    longitude,
    weather_state_name,
    temperatureinFahrenheit
  } = state.weather;
  return {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit,
    latitude,
    longitude
  };
};

const mapDispatch = dispatch => ({
  onLoad: (longitude,latitude) =>{
    dispatch({
      type: actions.FETCH_WEATHER,
      longitude:longitude,
      latitude:latitude
    })}
});

export default connect(
  mapState,
  mapDispatch
)(Weather);
