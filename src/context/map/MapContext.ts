import { createContext } from 'react';
import { Map } from 'mapbox-gl';
import { MapState } from '@/models';

interface MapContextProps extends MapState {
    // Methods
    setMap: (map: Map) => void;
}

export const MapContext = createContext({} as MapContextProps);