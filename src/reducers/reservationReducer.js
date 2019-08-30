import {SET_RESERVATION_DATES, SET_RESERVATION_APARTMENT} from '../actions/types';

const initialState = {
  dates: null,
  apartment: null,
  trips: [],
  car: null
}

export default(state = initialState, action) => {
  switch(action.type){

    case SET_RESERVATION_DATES:
      return{
        ...state,
        dates: action.payload
      }

    case SET_RESERVATION_APARTMENT:
      return{
        ...state,
        apartment: action.payload
      }

    default:
    return state;
  }
}