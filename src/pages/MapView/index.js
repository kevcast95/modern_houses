import React, { useEffect } from "react"
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
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
    const params = useParams()
    const houseId = parseInt(params.id)
    const dispatch = useDispatch()
    const houseDetail = houseId ?
        listToMap.filter((house) => house.id === houseId) : null
    const center = houseDetail? houseDetail[0]?.location : { lat: "37.78931819999999", lng: "-122.4542534" }
    const cityNum = (num, id) => {
        let markerStyle = ''
        if (houseDetail && (houseId === id)) {
            markerStyle = 'leaflet-container_selected'
        }else {
            markerStyle = 'leaflet-container_city-num'
        }
        const content = L.divIcon({
            className: markerStyle,
            html: `<h4>${num}</h4>`,
        });
        return content
    }
    useEffect(() => {
        if(!listToMap) dispatch(setLoading())
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
                            <Marker 
                                key={indx} position={marker.location} 
                                icon={cityNum(marker.number, marker.id)}
                            >
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