import styled from 'styled-components';
import { customMediaQuery } from './mediaQuery';

export const MapViewStyled = styled.div`
    height: 100%;
    width:100%;

      /* Media query */
  ${customMediaQuery("max-width", "tablets")} {
    height:75vh;
  }

`