import React, { useState } from 'react'
import { connect } from 'react-redux';
import CountUp from 'react-countup'
import { MapContainer, Popup, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import mapDefault from './mapDefault.json'
import 'leaflet/dist/leaflet.css';
import './Map.css'
import Info from './Info';
import Legend from './Legend';
import Map from './Map';
import { getProvince } from '../../../api/province';


const Report = (props) => {
    const [provinceList, setProvinceList] = useState([])
    
  const [map, setMap] = useState(null);
    const { fixNavbar } = props;

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
    <>
        <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item"><a className="nav-link active" id="Report-tab" data-toggle="tab" href="#Report-Invoices">Accueil</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <div  className="map">
        <MapContainer  center={[-4.034788, 21.755028]}  zoom={5} whenCreated={setMap}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
                style={style}
                data={mapDefault.features}
                onEachFeature={onEachCountry}
            />
          <Info map={map} />
          <Legend map={map} />
        </MapContainer>
        
        </div>  */}
          <Map/>
    </>
  )
}

export default Report