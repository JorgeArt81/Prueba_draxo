
export const getUserLocation = async (): Promise<GeolocationCoordinates> => {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve(coords);
            },
            (err) => {
                alert('No se pudo obtener la Geolocalización')
                console.log(err);
                reject();
            }
        )
    });
}