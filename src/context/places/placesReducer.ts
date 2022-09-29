import { House } from '@/models';
import { PlacesState } from '@/models/context';

type PlacesAction =
    { type: 'setIsLoading', payload: boolean } |
    { type: 'setUserLocation', payload: GeolocationCoordinates } |
    { type: 'setListLocations', payload: House[] }
export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
    switch (action.type) {
        case 'setIsLoading':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'setUserLocation':
            return {
                ...state,
                knowLocation: false,
                userLocation: action.payload
            }
        case 'setListLocations':
            state.locationsList = [];
            return {
                ...state,
                locationsList: action.payload
            }

        default:
            return state;
    }
}