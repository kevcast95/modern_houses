import React, { useEffect } from "react"
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"
import { GetHousesList, setLoading } from '../../redux/actions/houseAction'

import "leaflet/dist/leaflet.css"
import "./MapView.scss"
import Loader from "../../components/Loader";

function Map({ 
    listToMap,
    isLoading, }) {
    const dispatch = useDispatch()
    const center =  { lat: "37.78931819999999", lng: "-122.4542534" }
    const cityNum = (num) => {
        const content = L.divIcon({
            className: 'leaflet-container_city-num',
            html: `<h4>${num}</h4>`,
        });
        return content
    }
    useEffect(() => {
        dispatch(setLoading())
        dispatch(GetHousesList(dispatch))
    }, [])

    if (isLoading) {
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
                    listToMap.map((marker, indx) => {
                        return (
                            <Marker key={indx} position={marker.location} icon={cityNum(marker.number)}>
                                <Popup>
                                    {marker.name_translations.es}
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