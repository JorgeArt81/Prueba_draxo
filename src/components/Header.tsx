import { routes } from '@/routes';
import { HeaderStyled, LayoutContainer } from '@/styled-components';
import { useLocation } from 'react-router-dom';
import logo from '@/assets/draxo.svg';

export const Header = () => {
  const { pathname } = useLocation();
  const routeName = (routes.find(route => route.to === pathname))
  return (
    <HeaderStyled>
      <LayoutContainer>
        <div className="logo">
          <img src={logo} alt="Logo Draxo" />
        </div>
        <div className="info-container">
          <h1 className='page-name'>{routeName?.name}</h1>
          <p className='page-info'>Lista de casas en San Francisco</p>
        </div>
      </LayoutContainer>
    </HeaderStyled>
  )
}
