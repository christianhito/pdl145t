import React, { useEffect } from 'react'
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import './Legend.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import school from "../../../assets/images/icons/education.png"
import administratif from "../../../assets/images/icons/city-hall.png"
import healthcare from "../../../assets/images/icons/healthcare.png"
import hospital from "../../../assets/images/icons/hospital.png"
import forage from "../../../assets/images/icons/oil-pump.png"




function Legend() {
  // console.log(map);
  
  const map = useMap()
  useEffect(() => {

    function getColor(d) {
      return  d === "Ecole" ? school :
      d === "Bâtiment administratif" ? administratif :
      d === "Centre de santé" ? healthcare :
      d === "Forage"  ? forage :
                  hospital;
    
    }
      

    if (map) {
      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        var div = L.DomUtil.create("div", "info legend"),
        grades = ["Ecole", "Hôpital", "Forage", "Centre de santé", "Bâtiment administratif"],
        labels = [],
        from, to;

        for (var i = 0; i < grades.length; i++) {
          from = grades[i];
          to = grades[i + 1];
    
        //   labels.push(
        //     '<i style="background:' + getColor(from) + '"></i> '  +
        //     from );
    
            labels.push(
              '<img className="icon-legend" style="width: 15px"  src="' + getColor(from) + '"></i> '  +
              from );
        }

        div.innerHTML = labels.join('<br>');
        return div;
      };

      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}

export default Legend
