import { routes } from '@/routes';
import { HeaderStyled, LayoutContainerStyled } from '@/styled-components';
import { useLocation } from 'react-router-dom';
import logo from '@/assets/draxo.svg';
import { PageInfo } from './PageInfo';

export const Header = () => {
  const { pathname } = useLocation();
  const routeName = (routes.find(route => route.to === pathname))
  return (
    <HeaderStyled>
      <LayoutContainerStyled>
        <div className="logo">
          <img src={logo} alt="Logo Draxo" />
        </div>
        <PageInfo className='info-show-mb'/>
      </LayoutContainerStyled>
    </HeaderStyled>
  )
}
