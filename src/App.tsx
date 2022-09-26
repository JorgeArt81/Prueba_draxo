import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header, Navigation } from './components';
import { routes } from './routes';
import { ContentContainer } from './styled-components';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <ContentContainer>
          <Navigation />
          <Routes>
            {
              routes.map(({ to, path, Component }) => (
                <Route key={to} path={path} element={<Component />} />
              ))
            }
            <Route path='/*' element={<Navigate to='/mapa' />} />
          </Routes>
        </ContentContainer>
      </BrowserRouter>
    </>
  )
}

export default App
