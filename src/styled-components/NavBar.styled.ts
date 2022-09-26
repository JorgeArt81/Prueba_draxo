import styled from "styled-components";
import { customMediaQuery } from "./mediaQuery";

export const NavBarStyles = styled.nav`
  background-color: var(--nav-bg-color);
  color: white;
  padding: 20px;
  width: var(--nav-width);

  .links-container {
    position: relative;
    margin: 30px 0px;
  }

  .navlink {
    display: flex;
    line-height: 53px;
    font-size: 16px;
    font-weight: var(--fw-bold);
    position: relative;
    transition: var(--transition-def);

    .icon {
      margin-right: 15px;
      max-width: 45px;
      transition: var(--transition-def);
    }

    .name {
      position: relative;
      top: -4px;
    }
  }

  .line {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .line::after {
    background-color: var(--text-color);
    content: "";
    display: block;
    height: 30px;
    margin-right: 15px;
    width: 2px;
  }

  li:last-child .line::after {
    display: none;
  }

  .nav-active {
    color: var(--icon-nav-color);
    .icon {
      fill: var(--icon-nav-color);
    }
  }

  .top-line {
    border-bottom: 1px solid var(--icon-nav-color);
    margin-top: 95px;
    width: 320px;
  }

  /* Media query */
  ${customMediaQuery("max-width", "tablets")} {
    background-color: var(--header-bg-color);
    display: flex;
    justify-content: center;
    padding-top:0px;
    width: 100%;

    .top-line {
      display: none;
    }

    .links-container {
      margin: 0px;
    }

    ul {
      display: flex;
    }

    .navlink {
      /* max-width:140px; */
      .icon {
        margin: 0px;
        max-width: 40px;
      }
      .name {
        display: none;
      }
    }

    .line {
      flex-direction: row;
    }

    .line::after {
      background-color: var(--text-color);
      content: "";
      display: block;
      height: 2px;
      width: 103px;
      margin: 0;
    }

    li:last-child .line::after {
      display: none;
    }
  }
`;
