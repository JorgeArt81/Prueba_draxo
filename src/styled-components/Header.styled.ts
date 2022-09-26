import styled from "styled-components";

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

    .info-container{
        margin-left:28px;
    }

    .page-name{
        font-size:24px;
        font-weight:var(--fw-bold);
    }
    .page-info{
        color:var(--text-info-color);
        font-size:16px;
        font-style:italic;
    }

`;
