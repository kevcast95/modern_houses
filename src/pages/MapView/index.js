import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"
import { getHouses } from '../../connection/housesApi';

import "leaflet/dist/leaflet.css"
import "./MapView.scss"
import Loader from "../../components/Loader";

function Map({ zoom, className }) {
    const [houses, SetHouses] = useState([])
    const center = { lat: 11.01563541, lng: -74.83849168 }
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
    useEffect(()=>{
        setTimeout(()=>{
            const houses = getHouses();
            houses.then(res=> {
                SetHouses(res.data)
            })
            .catch(error => 
                alert('Upps, looks like we dont have houses to show! Please try later'));
            
            setLoading(false)
        },600)
    },[])

    useEffect(()=>{
        const extractHouses = Object.values(houses)
        const allHouses = []
        for (let i = 0; i < extractHouses.length; i++) {
            const group = extractHouses[i]
            for (let j = 0; j < group.length; j++) {
                allHouses.push(group[j])
                
            }
        }
        console.log(allHouses)
    },[houses])

    if (loading) {
        return <Loader/>
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

export default Map