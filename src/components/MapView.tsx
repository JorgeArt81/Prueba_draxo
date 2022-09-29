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
                center: [userLocation?.longitude || -122.48, userLocation?.latitude || 37.79], // starting position [lng, lat]
                zoom: 12, // starting zoom
            });
            // setMap(map);
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
// 36.493699563995946, -119.64502982429563