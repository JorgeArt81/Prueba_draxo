import styled from "styled-components";
import { customMediaQuery } from '../mediaQuery';
import { LayoutContainerStyled } from "./LayoutContainer.styled";

export const ContentContainerStyled = styled(LayoutContainerStyled)`
  min-height: calc(100vh - var(--header-height));
  background-color: var(--header-bg-color);


  .house-list {
    max-height:100vh;
    overflow-y:scroll;
    padding: 5rem;

    hr {
      border-bottom: 1px solid black;
    }
  }

    /* Media query */
    ${customMediaQuery("max-width", "tablets")} {
        .house-list {
            padding: 1rem;
        }


  }
`;
