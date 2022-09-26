import { PlacesState } from '@/models/context';
import { createContext } from 'react';

export interface PlacesContextProps extends PlacesState { }

export const PlacesContext = createContext({} as PlacesContextProps);
