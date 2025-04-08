"use client";

import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.backgroundBlack};
    height: 70px;
    width: 100%;
    justify-content: center;
`;
