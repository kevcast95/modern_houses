/* eslint default-param-last: off */
import {
    GET_HOUSE_LIST,
    LIST_TO_MAP,
  } from '../contants'
  
  export const initialState = {
    housesList: [],
    listToMap: [],
    loading: false,
  }
  
  
  const houseReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case GET_HOUSE_LIST: {
        return {
          ...state,
          housesList: payload,
          loading: false
        }
      }
      case LIST_TO_MAP: {
        return {
          ...state,
          listToMap: payload,
          loading: false
        }
      }
      default:
        return state
    }
  }
  
  export default houseReducer
  