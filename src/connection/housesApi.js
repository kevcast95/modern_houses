import axios from "axios";

export const getHouses = () => {
 const url = `https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco`
 return axios({
  method: 'GET',
  url
 })
}
