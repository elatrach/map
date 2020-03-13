import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const MyMap = ({updateClick}) => {
    const [markers, setMarkers] = useState([])
    const setMark = (e) => {
        setMarkers(prev => [...prev, e.latlng])
        updateClick(markers.length)
    }
    return (

        <Map center={[45.4, -75.7]} zoom={12} onclick={(e) => setMark(e)} class="dark">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
                <Marker position={marker} key={index}>
                    <Popup>
                        coucou
                    </Popup>
                </Marker>
            ))}

        </Map>
    );
}
export default MyMap