import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MapProvider, PlacesProvider } from '@/context';
import { Header, Navigation } from '@/components';
import { routes } from '@/routes';
import { ContentContainerStyled, PagesContainerStyled } from '@/styled-components';

function App() {

  return (
    <>
      <PlacesProvider>
        <BrowserRouter>
          <Header />
          <ContentContainerStyled>
            <Navigation />
            <MapProvider>
              <PagesContainerStyled>
                <Routes>
                  {
                    routes.map(({ to, path, Component }) => (
                      <Route key={to} path={path} element={<Component />} />
                    ))
                  }
                  <Route path='/*' element={<Navigate to='/mapa' />} />
                </Routes>
              </PagesContainerStyled>
            </MapProvider>
          </ContentContainerStyled>
        </BrowserRouter>
      </PlacesProvider>
    </>
  )
}

export default App
