import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { setInterval } from "timers";
import "./inline.css";


class Drone extends Component {
  
    componentDidMount() {

    this.props.getdrone();
      var that = this;
      setInterval(function(){
        that.props.getdrone();
        
      },3000);  
       

      
    }
    
    render() {
      const {
        
        latitude,
        longitude,
        diff,
        metric,
        
      } = this.props;
      
    //   console.log(latitude);
    //   console.log(latitude);
    //   if (loading) return <LinearProgress />;

      return (
        <>
          <div>
            <ul className = "inline">
                <li>{`Temperature: ${metric}`}</li>
                <li>{`Latitude: ${latitude}`}</li>
                <li>{`Longitude: ${longitude}`}</li>
                <li>{`Last Received: ${diff} seconds ago`}</li>
            </ul>
          </div>
        </>
      );
    }
  }
  
  const mapState = (state, ownProps) => {
    const {
      timestamp,
      latitude,
      longitude,
      metric,
      diff
    } = state.drone;
    return {
      latitude,
      longitude,
      metric,
      timestamp,
        diff
    };
  };
  
  const mapDispatch = dispatch => ({
    getdrone: () =>
      dispatch({
        type: actions.FETCH_DRONE
      }),
  });
  export default connect(
    mapState,
    mapDispatch
  )(Drone);