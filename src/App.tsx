import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header, Navigation, PageInfo } from './components';
import { routes } from './routes';
import { ContentContainerStyled } from './styled-components';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <ContentContainerStyled>
          <Navigation />
          <Routes>
            {
              routes.map(({ to, path, Component }) => (
                <Route key={to} path={path} element={<Component />} />
              ))
            }
            <Route path='/*' element={<Navigate to='/mapa' />} />
          </Routes>
        </ContentContainerStyled>
      </BrowserRouter>
    </>
  )
}

export default App
