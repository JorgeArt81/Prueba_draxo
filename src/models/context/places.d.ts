export interface PlacesState {
    isLoading: boolean;
    userLocation?: GeolocationCoordinates;
    locationsList?: House[];
}
