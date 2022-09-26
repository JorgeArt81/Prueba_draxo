import { useEffect, useReducer } from 'react';
import { PlacesState } from '@/models/context';
import { getUserLocation } from '@/utilities';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

interface Props {
    children: JSX.Element | Array<JSX.Element>
}
export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation()
            .then(coords => dispatch({ type: 'setUserLocation', payload: coords }))
    }, [])


    return (
        <PlacesContext.Provider value={{ ...state }}>
            {children}
        </PlacesContext.Provider>
    )
}
