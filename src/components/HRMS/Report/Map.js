import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
// import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/GeoSearch";
import {  useSelector, useDispatch } from 'react-redux';
// import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import './Map.css'
import mapDefault from './mapDefault.json'
import {Icon} from 'leaflet'

import L from 'leaflet';
import Info from './Info';
import { useHistory } from 'react-router-dom';
import { getProvince } from '../../../api/province';

const Map = () => {
    
    let history = useHistory()
    
    
    const [map, setMap] = useState(null);
    
    const [provinceList, setProvinceList] = useState([])

  const fetchData = React.useCallback(() => {
        getProvince()
        .then((response) => {
            setProvinceList(response.data)
        
        console.log('setProvinceList ', response.data)
        })
        .catch((error) => {
        console.log(error)
        })

    }, [])
    React.useEffect(() => {
    fetchData()
    }, [fetchData])
  
  
    return (
        <div className="map">
        {/* <MapContainer center={[-4.034788, 21.755028]}  zoom={5} whenCreated={setMap}>
        
        <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        
          <Info map={map} />
          
        </MapContainer> */}
        <MapContainer center={[-4.034788, 21.755028]}  zoom={5} whenCreated={setMap}>
     <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <GeoJSON
            style={style}
            data={mapDefault.features}
            onEachFeature={onEachCountry}
          /> */}
      <Info map={map} provinceList={provinceList} />
</MapContainer>
      </div>
    )
}

export default Map
