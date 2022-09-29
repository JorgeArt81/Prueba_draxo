import { MapState } from '@/models';
import Mapboxgl, { Map } from 'mapbox-gl';


type MapAction = { type: 'setMap', payload: Map } | { type: 'setMarkersHouse', payload: Mapboxgl.Marker[] }

export const mapReducer = (state: MapState, action: MapAction): MapState => {
    switch (action.type) {
        case 'setMap':
            return {
                ...state,
                isMapReady: true,
                map: action.payload,
            }

        case 'setMarkersHouse':
            state.markers = [];
            return {
                ...state,
                markers: action.payload,
            }

        default:
            return state;
    }

}