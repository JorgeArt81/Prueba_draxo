import { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { House, MapState } from '@/models';

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: undefined,
}

interface Props {
    children: JSX.Element | Array<JSX.Element>
}
export const MapProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const myLocationPopup = new Popup()
        .setHTML(`
            <h4>Mi ubi</h4>
        `);

    const setMap = (map: Map) => {
        new Marker()
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map);

        dispatch({ type: 'setMap', payload: map });
    }

    const setMarkersHouse = (map: Map, houseList: House[]) => {
        const listMarkers = houseList.map(house => {
            const houseLocationPopup = new Popup()
                .setHTML(`
            <h4>${house.number}}</h4>
        `);

            console.log([house.location.longitude, house.location.latitude])
            const marker = new Marker()
                .setLngLat([Number(house.location.longitude), Number(house.location.latitude)])
                .setPopup(houseLocationPopup)
                .addTo(map);

            return marker;
        })
        dispatch({ type: 'setMarkersHouse', payload: listMarkers });
    }

    return (
        <MapContext.Provider value={{
            ...state,

            // Methods
            setMap,
            setMarkersHouse
        }}>
            {children}
        </MapContext.Provider>
    )
}
