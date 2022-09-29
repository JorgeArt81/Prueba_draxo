import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { useContext, useLayoutEffect, useRef } from 'react';

import { MapContext, PlacesContext } from '@/context';
import { MapViewStyled } from '@/styled-components';
import { Loading } from './Loading';

export const MapView = () => {
    const { isLoading, userLocation, locationsList } = useContext(PlacesContext);
    const { setMap, setMarkersHouse } = useContext(MapContext);

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [userLocation?.longitude || -74.5, userLocation?.latitude || 40], // starting position [lng, lat]
                zoom: 14, // starting zoom
            });
            setMap(map);
            setMarkersHouse(map, locationsList!)
        }
    }, [isLoading])
    
    if (isLoading) {
        return (<Loading />);
    }
    return (
        <MapViewStyled ref={mapDiv}>

        </MapViewStyled>
    )
}
