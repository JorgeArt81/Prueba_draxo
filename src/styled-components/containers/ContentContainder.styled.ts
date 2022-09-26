import styled from 'styled-components';
import { LayoutContainerStyled } from './LayoutContainer.styled';


export const ContentContainerStyled = styled(LayoutContainerStyled)`
    min-height: calc(100vh - var(--header-height));

`