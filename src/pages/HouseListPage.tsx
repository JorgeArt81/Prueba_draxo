import { HouseCard, Loading } from '@/components';
import { useHouseList } from '../hooks/useHouseList';

export const HouseListPage = () => {
  const { orderData } = useHouseList();
  
  if (orderData.length <= 0) {
    return (<Loading />);
  }
  return (
    <section className='house-list'>
      <ul>
        {
          orderData.map(house => (
            <li key={house[0].toString()}>
              <span>{house[0]}</span>
              <hr/>
              {
                house[1].map(({ address, url, name_translations, number, id, name, building_start_date, building_end_date }) => (
                  <HouseCard
                    key={id}
                    address={address}
                    url={url}
                    name_translations={name_translations.es}
                    number={number}
                    name={name}
                    building_start_date={building_start_date}
                    building_end_date={building_end_date}
                  />
                ))
              }
            </li>
          ))
        }
      </ul>
    </section>
  )
}
