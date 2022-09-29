import Mapboxgl, { Map } from 'mapbox-gl';
export interface MapState {
    isMapReady: boolean;
    map?: Map;
    markers?:Mapboxgl.Marker[];
}