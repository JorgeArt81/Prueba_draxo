import { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { MapState } from '@/models';

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
}

interface Props {
    children: JSX.Element | Array<JSX.Element>
}
export const MapProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const myLocationPopup = new Popup()
        .setHTML(`
            <h4>Casa en San Francisco</h4>
        `);

    const setMap = (map: Map) => {
        new Marker()
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map);

        dispatch({ type: 'setMap', payload: map });
    }

    return (
        <MapContext.Provider value={{
            ...state,

            // Methods
            setMap,
        }}>
            {children}
        </MapContext.Provider>
    )
}
