import { createContext } from 'react';
import { Map } from 'mapbox-gl';
import { MapState } from '@/models';
import { House } from '../../models/modernHouse';

interface MapContextProps extends MapState {
    // Methods
    setMap: (map: Map) => void;
    setMarkersHouse: (map: Map, houseList:House[]) => void;
}

export const MapContext = createContext({} as MapContextProps);