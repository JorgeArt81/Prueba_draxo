import styled from "styled-components";
import { customMediaQuery } from '../mediaQuery';

export const LayoutContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: var(--breakpoint-xxl);
  grid-template-columns: var(--nav-width) auto;

  ${customMediaQuery("max-width", "tablets")} {
    /* display:flex; */

  }

`;
