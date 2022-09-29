import { PlacesState } from '@/models/context';
import { createContext } from 'react';

export interface PlacesContextProps extends PlacesState {
    setLocation?: (geolocation: GeolocationCoordinates) => void;
}

export const PlacesContext = createContext({} as PlacesContextProps);
