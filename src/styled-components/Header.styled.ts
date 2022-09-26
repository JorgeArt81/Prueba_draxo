import styled from "styled-components";
import { customMediaQuery } from './mediaQuery';

export const HeaderStyled = styled.header`
  
    align-items:center;
    background-color:var(--header-bg-color);
    display:flex;
    height:var(--header-height);
    justify-content:center;
    width:100%;
    /* position:relative; */

    .logo{
        position:relative;
        
        img{
            max-height:68px;
        }
    }

    
    ${customMediaQuery("max-width", "tablets")} {
        --header-height:76px;

        .info-show-mb{
            display:none;
        }

        .logo{      
        img{
            max-height:48px;
        }
    }
  }

`;
