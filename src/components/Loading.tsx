import { LoadingStyled } from '@/styled-components'
import spinner from '@/assets/Spinner-1s-200px.gif';
export const Loading = () => {
  return (
    <LoadingStyled>
        <div>
            <img className='spinner' src={spinner} alt="loading" />
        </div>
    </LoadingStyled>
  )
}
