import { useEffect, useReducer } from 'react';

import { useHouseList } from '@/hooks';
import { PlacesState } from '@/models/context';
import { getUserLocation } from '@/utilities';
import { House } from '../../models/modernHouse';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    locationsList: undefined,
}

interface Props {
    children: JSX.Element | Array<JSX.Element>
}


export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);
    const { listValues } = useHouseList();

    useEffect(() => {
        getUserLocation()
            .then(coords => {
                dispatch({ type: 'setUserLocation', payload: coords })
            })
    }, [])

    useEffect(() => {
        dispatch({ type: 'setIsLoading', payload: true });
        dispatch({ type: 'setListLocations', payload: listValues as House[] })

        const timer = setTimeout(() => {
            dispatch({ type: 'setIsLoading', payload: false });
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [listValues.length > 0])

    const setLocation = (coords: GeolocationCoordinates) => {
        dispatch({ type: 'setUserLocation', payload: coords });
    }

    return (
        <PlacesContext.Provider value={{
            ...state,

            // Methods
            setLocation
        }}>
            {children}
        </PlacesContext.Provider>
    )
}
