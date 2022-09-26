import styled from "styled-components";
import { customMediaQuery } from '../mediaQuery';

export const LayoutContainerStyled = styled.div`
  display: grid;
  width: 100%;
  max-width: var(--breakpoint-xxl);
  grid-template-columns: var(--nav-width) auto;

  .info-show{
            display:none;
        }

  ${customMediaQuery("max-width", "tablets")} {
    display:flex;
    flex-direction:column;

    .info-show{
            display:flex;
            flex-direction:column;
            align-items:center;
            margin: 36px 14px 14px;
        }
  }

`;
