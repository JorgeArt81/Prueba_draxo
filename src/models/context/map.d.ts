import { Map } from 'mapbox-gl';
export interface MapState {
    isMapReady: boolean;
    map?: Map;
}