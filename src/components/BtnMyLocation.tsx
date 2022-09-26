import { MapContext, PlacesContext } from '@/context';
import { useContext } from 'react';

import { Icon } from './icons'

interface Props {
    customClass?: string;
}
export const BtnMyLocation = ({ customClass }: Props) => {
    const { isMapReady, map } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const handleClick = () => {
        if (!isMapReady) throw new Error('El Mapa no está listo');
        if (!userLocation) throw new Error('La ubicación de usuario no existe');

        map?.flyTo({
            zoom: 14,
            center: [userLocation.longitude, userLocation.latitude]
        })
    }

    return (
        <>
            <button className={customClass} onClick={handleClick} style={{
                backgroundColor:'white',
                 borderRadius:'8px',
                 cursor: 'pointer',
                 height:'35px',
                 width:'35px',
                 }}>
                <Icon name='gpsFixed' />
            </button>
        </>

    )
}
