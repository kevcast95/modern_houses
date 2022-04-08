import React, { useState, useEffect } from "react"
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"
import { getHouses } from '../../connection/housesApi';

import "leaflet/dist/leaflet.css"
import "./MapView.scss"
import Loader from "../../components/Loader";

function Map({ 
    className,
    listToMap,
    isLoading, }) {
    const [houses, SetHouses] = useState([])
    console.log(listToMap,
        isLoading,);
    const center = houses[0]?.location || { lat: 11.10563541, lng: -74.80849168 }
    const [loading, setLoading] = useState(true)

    const markers = [{ lat: 11.10563541, lng: -74.80849168 }, { lat: 11.01563541, lng: -74.83849168 }, { lat: 11.01563541, lng: -74.63849168 }]
    const cityNum = (num) => {
        const content = L.divIcon({
            className: "custom-popup",
            html: `<h3>${num}</h3>`,
        });
        return content
    }
    console.log(houses);
    useEffect(() => {
        setTimeout(() => {
            const housesList = getHouses();
            housesList.then(res => {
                const extractHouses = Object.values(res.data)
                const allHouses = []
                for (let i = 0; i < extractHouses.length; i++) {
                    const group = extractHouses[i]
                    for (let j = 0; j < group.length; j++) {
                        allHouses.push(group[j])

                    }
                }
                SetHouses(allHouses)
            })
                .catch(error =>
                    alert('Upps, looks like we dont have houses to show! Please try later'));

            setLoading(false)
        }, 600)
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className='leaflet-container'>
            <MapContainer center={center} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    markers.map((marker, indx) => {
                        return (
                            <Marker key={indx} position={marker} icon={cityNum(marker.lat)}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>

                            </Marker>

                        )
                    })
                }
            </MapContainer >
        </div>

    )
}
Map.propTypes = {
    listToMap: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }
function mapStateToProps({ house }) {
    return {
        listToMap: house.listToMap,
        isLoading: house.loading,
    }
  }

export default  connect(mapStateToProps)(Map)