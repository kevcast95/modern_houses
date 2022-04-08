import {
    GET_HOUSE_LIST,
    LIST_TO_MAP,
    IS_LOADING,
} from '../contants'
import { getHouses } from '../../connection/housesApi'

const setToListView = (payload) => ({
    type: GET_HOUSE_LIST,
    payload,
})

const setToMapView = (payload) => {
        payload.map(house => 
        house.location = {
            lat:  house.location.latitude, 
            lng: house.location.longitude, 
        }
    )
    return ({
        type: LIST_TO_MAP,
        payload,
    })
}

export const setLoading = () => ({
    type: IS_LOADING,
    payload: true
})

export const GetHousesList = () => async (dispatch) =>  {
    setTimeout(() => {
        const housesList = getHouses();
        housesList.then(res => {
            const extractHouses = Object.values(res.data)
            const toMap = [].concat(...extractHouses)
            const toList = res.data
            dispatch(setToListView(toList))
            dispatch(setToMapView(toMap))
            console.log('actoon allHouses', toMap);
        })
        .catch(error =>
            alert('Upps, looks like we dont have houses to show! Please try later'));

    }, 600)
}