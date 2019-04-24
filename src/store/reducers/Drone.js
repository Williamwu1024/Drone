import * as actions from "../actions";

const initialState = {
  loading: false,
  weatherId: null,
  name: "",
  temperature: "",
  weather_state_name: "",
  latitude:10,
  longitude:-90,
  droneData:[],
  data: {}
};


const startLoading = (state, action) => {
  return { ...state, loading: true };
};


const droneDataRecevied = (state, action) => {
  const { data } = action.data;
  const longitude = data[0].longitude;
  // console.log(data[0]);
  const latitude = data[0].latitude;
//   console.log(latitude);
//   console.log(longitude);
  const timestamp = data[0].timestamp;
  const metric = data[0].metric;
  // console.log(timestamp);
  const diff = (timestamp - state.timestamp)/1000;
  const droneData = data;
//   console.log((droneData[0].timestamp - droneData[droneData.length-2].timestamp)/60000);
  // console.log(diff);
  return{...state, 
    longitude,
    latitude,
    timestamp,
    diff,
    metric,
    droneData,
    loading:false
  };
};

const handlers = {
  [actions.DRONE_DATA_RECEIVED]: droneDataRecevied
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
