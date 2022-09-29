import { useEffect, useMemo, useReducer } from 'react';

import { PlacesState } from '@/models/context';
import { getUserLocation } from '@/utilities';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { useHouseList } from '@/hooks';
import { House } from '../../models/modernHouse';

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
        dispatch({ type: 'setListLocations', payload: listValues as House[] })
    }, [listValues.length > 0])

    
    return (
        <PlacesContext.Provider value={{ ...state }}>
            {children}
        </PlacesContext.Provider>
    )
}
