import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"

import "leaflet/dist/leaflet.css"
import "./MapView.scss"

function Map({ zoom, className }) {
    const center = { lat: 11.01563541, lng: -74.83849168 }

    const markers = [{ lat: 11.10563541, lng: -74.80849168 }, { lat: 11.01563541, lng: -74.83849168 }, { lat: 11.01563541, lng: -74.63849168 }]
    const cityNum = (num) => {
        const content = L.divIcon({
            className: "custom-popup",
            html: `<h3>${num}</h3>`,
          });
        return content
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