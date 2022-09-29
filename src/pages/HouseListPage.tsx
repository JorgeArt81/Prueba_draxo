import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { HouseCard, Loading, PageInfo } from '@/components';
import { PlacesContext } from '@/context';
import { Location } from '@/models';
import { useHouseList } from '../hooks/useHouseList';

const initLocation: GeolocationCoordinates = {
  accuracy: 0,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: 0,
  longitude: 0,
  speed: null
}
export const HouseListPage = () => {
  const { setLocation } = useContext(PlacesContext);
  const { orderData } = useHouseList();

  let navigate = useNavigate();
  const handleClick = ({ latitude, longitude }: Location) => {
    navigate('/mapa');

    setLocation!({
      ...initLocation,
      latitude: Number(latitude),
      longitude: Number(longitude)
    })
  }

  if (orderData.length <= 0) {
    return (<Loading />);
  }
  return (
    <>
      <PageInfo className='info-show' />

      <section className='house-list'>
        <ul>
          {
            orderData.map(house => (
              <li key={house[0].toString()}>
                <span>{house[0]}</span>
                <hr />
                {
                  house[1].map(({ address, url, name_translations, number, id, name, building_start_date, building_end_date, location }) => (
                    <HouseCard
                      key={id}
                      address={address}
                      url={url}
                      name_translations={name_translations.es}
                      number={number}
                      name={name}
                      building_start_date={building_start_date}
                      building_end_date={building_end_date}
                      handledClick={() => handleClick(location)}
                    />
                  ))
                }
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}
