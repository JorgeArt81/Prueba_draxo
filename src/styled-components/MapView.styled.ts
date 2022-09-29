import styled from "styled-components";
import { customMediaQuery } from "./mediaQuery";

export const MapViewStyled = styled.div`
  --marker-size: 30px;
  height: 100%;
  width: 100%;

  .marker {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    background-size: cover;
    width: var(--marker-size);
    height: var(--marker-size);
    border-radius: 50%;
    cursor: pointer;
  }

  .marker::after {
    content: attr(name);
    color: white;
    font-weight: var(--fw-bold);
  }

  /* Media query */
  ${customMediaQuery("max-width", "tablets")} {
    height: 75vh;
  }
`;
