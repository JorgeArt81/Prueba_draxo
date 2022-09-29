import styled from "styled-components";
import { customMediaQuery } from "./mediaQuery";

export const HouseCardStyled = styled.div`
  --padding-card: 10px;
  --width-img: 200px;
  display: grid;
  grid-template-columns: 210px auto 50px;
  align-items: center;

  img {
    max-width: var(--width-img);
    margin: var(--padding-card);
    height: calc(var(--width-img) * 0.5625);
    object-fit: cover;
  }

  .description {
    padding: var(--padding-card);

    b {
      font-weight: var(--fw-bold);
    }
  }

  /* Media query */
  ${customMediaQuery("max-width", "tablets")} {
    --padding-card: 5px;
    --width-img: 100px;
    grid-template-columns: 110px auto 50px;
  }
`;
