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
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Link } from 'react-router-dom';
import testimg from '../../../assets/images/test.jpeg'
import Legend from './Legend';
import school from "../../../assets/images/icons/education.png"


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
      <Legend />
      
        <Marker 
        position={[0.4975, 29.328611]} 
          icon={new Icon({iconUrl: require("../../../assets/images/icons/education.png"), iconSize: [25, 41], iconAnchor: [12, 41]})} 
        >
          <Popup>
            <Link to="/hr-users">Village Kabiona 2, Beni, République Démocratique du Congo.</Link> <br/>
            <img src={testimg} alt='test img' /> 
          </Popup>
        </Marker>

        <Marker 
        position={[1.45139166666666, 29.87638833333333]} 
          icon={new Icon({iconUrl: require("../../../assets/images/icons/city-hall.png"), iconSize: [25, 41], iconAnchor: [12, 41]})} 
        >
          <Popup>
            <Link to="/hr-users">Résidence Administrateur du territoire</Link> <br/>
            <img src={testimg} alt='test img' /> 
          </Popup>
        </Marker>

        <Marker 
        position={[1.4589283333333334, 29.872978333333336]} 
          icon={new Icon({iconUrl: require("../../../assets/images/icons/city-hall.png"), iconSize: [25, 41], iconAnchor: [12, 41]})} 
        >
          <Popup>
            <Link to="/hr-users">Résidence Commandant FARDC</Link> <br/>
            <img src={testimg} alt='test img' /> 
          </Popup>
        </Marker>

        <Marker 
        position={[1.4481133333333331, 29.86683833333333]} 
          icon={new Icon({iconUrl: require("../../../assets/images/icons/cil-pump.png"), iconSize: [25, 41], iconAnchor: [12, 41]})} 
        >
          <Popup>
            <Link to="/hr-users">Résidence Commandant FARDC</Link> <br/>
            <img src={testimg} alt='test img' /> 
          </Popup>

</MapContainer>
      </div>
    )
}

export default Map
