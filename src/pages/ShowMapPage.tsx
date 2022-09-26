import { BtnMyLocation, MapView, PageInfo } from '@/components'

export const ShowMapPage = () => {
  return (
    <>
      <PageInfo className='info-show' />
      <BtnMyLocation customClass='btn-location-map' />
      <MapView />
    </>
  )
}
