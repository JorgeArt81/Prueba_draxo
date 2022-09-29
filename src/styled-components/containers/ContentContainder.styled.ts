import styled from "styled-components";
import { customMediaQuery } from "../mediaQuery";
import { LayoutContainerStyled } from "./LayoutContainer.styled";

export const ContentContainerStyled = styled(LayoutContainerStyled)`
  min-height: calc(100vh - var(--header-height));
  background-color: var(--header-bg-color);

  .house-list,
  .about-page {
    max-height: 100vh;
    overflow-y: scroll;
    padding: 5rem;

    hr {
      border-bottom: 1px solid black;
    }
  }

  .about-page {
    overflow-y: revert;
    h1 {
      font-size: 24px;
      font-weight: var(--fw-bold);
    }
    h2 {
      font-size: 18px;
      font-weight: var(--fw-bold);
      margin-top:0.5rem;
    }
    p {
      margin-top: 1rem;
      text-align: justify;
    }
  }

  /* Media query */
  ${customMediaQuery("max-width", "tablets")} {
    .house-list {
      padding: 1rem;
    }
  }
`;
