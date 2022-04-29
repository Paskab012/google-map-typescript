import React, {useRef, useEffect, useState} from "react";

interface IMap {
    mapType:google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Map: React.FC<IMap> = ({mapType, mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();

    const startMap = ():void => {
        if (!map) {
            defaultMapStart()
        }
    }
    useEffect(startMap, [map]);

    const defaultMapStart = ():void => {
        const defaulAddress = new google.maps.LatLng(-1.940278, 29.873888);
        initMap(5, defaulAddress);
    }

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
            new google.maps.Map(ref.current, {
                zoom: zoomLevel,
                center: address,
                mapTypeControl: mapTypeControl,
                streetViewControl: false,
                zoomControl: true,
                mapTypeId: mapType
            })
            )
        }
    };

    return (
        <div className="map-container">
            <div ref={ref} className="map-container__map">

            </div>
        </div>
    );
};
export default Map;  