import React,{Component} from 'react';
import { connect } from "react-redux";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class Chart extends Component {

    render () {
    const data = this.props.droneData.map(item => {
        let itemtime = new Date(item.timestamp);
        return {name: itemtime.getHours() + ':' +itemtime.getMinutes(), temp: item.metric}
    })

        return (
            <LineChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="name" />
               <YAxis type="number" domain={['auto', 'auto']}/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Line type="monotone" dataKey="temp" stroke="#8884d8" dot={false}/>
               {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        );
      }
    }

    const mapState = (state, ownProps) => {
        const {
          latitude,
          longitude,
          metric,
          droneData
        } = state.drone;
        return {
          latitude,
          longitude,
          metric,
          droneData
        };
      };

    export default connect(
        mapState,
        null
      )(Chart);