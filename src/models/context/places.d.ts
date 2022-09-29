export interface PlacesState {
    isLoading: boolean;
    knowLocation?: boolean;
    userLocation?: GeolocationCoordinates;
    locationsList?: House[];
}
