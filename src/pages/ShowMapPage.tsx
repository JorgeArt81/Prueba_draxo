import { BtnMyLocation, MapView, PageInfo } from '@/components'
import { useHouseList } from '@/hooks'

export const ShowMapPage = () => {
  const { orderData } = useHouseList();

  return (
    <>
      <PageInfo className='info-show' />
      <BtnMyLocation customClass='btn-location-map' />
      <MapView />
    </>
  )
}
