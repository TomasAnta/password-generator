"use client";

import styled from "styled-components";
import { responsiveBreakPoints } from "@styles/DesignVariables";

export const GeneratorStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.colors.backgroundBlack};
    height: 328px;
    width: 100%;
    padding: 0 24px;
    justify-content: center;

    @media ${responsiveBreakPoints.maxSmallDesktop} {
        text-align: center;
        height: auto;
        padding: 48px 24px;
    }
`;

export const PasswordInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 695px;
    margin: 24px 0;
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.colors.backgroundBlack};
    color: ${(props) => props.theme.colors.inputTextColor};
    font-size: ${(props) => props.theme.fontSizes.inputText};
    line-height: ${(props) => props.theme.lineHeights.inputText};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    outline: none;
    transition: all 0.4s;
    margin-bottom: 16px;

    @media ${responsiveBreakPoints.maxTablet} {
        flex-direction: column;
        height: auto;
    }
`;

export const PasswordChoices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @media ${responsiveBreakPoints.maxTablet} {
        gap: 8px;
    }
`;
