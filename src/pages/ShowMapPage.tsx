import { BtnMyLocation, MapView, PageInfo } from '@/components'
import { useHouseList } from '@/hooks'

export const ShowMapPage = () => {
  return (
    <>
      <PageInfo className='info-show' />
      <BtnMyLocation customClass='btn-location-map' />
      <MapView />
    </>
  )
}
