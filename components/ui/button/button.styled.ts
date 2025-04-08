"use client";

import styled, { css } from "styled-components";
import {
    fontSizes,
    fontWeights,
    colors,
    lineHeights,
} from "@styles/DesignVariables";

export type ButtonVariants = "primary" | "secondary";

interface StyledButton {
    variant: ButtonVariants;
}

export const defaultButton = css<StyledButton>`
    font-size: ${fontSizes.buttonText};
    line-height: ${lineHeights.buttonText};
    font-weight: ${fontWeights.bold};
    border: none;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const primaryButton = css<StyledButton>`
    background: ${colors.buttonBackground};
    color: ${colors.buttonTextColor};
    height: 50px;
    max-width: 187.23px;
    transition: all 0.4s;
    border: none;
    width: 100%;
    position: relative;

    &:hover {
        background-color: ${colors.buttonHoverBackground};
    }
`;

export const secondaryButton = css<StyledButton>`
    background: ${colors.backgroundBlack};
    color: ${colors.buttonTextColor};
    height: 50px;
    max-width: 187.23px;
    transition: all 0.4s;
    width: 100%;
`;

export const StyledButton = styled.button<StyledButton>`
    ${defaultButton};
    ${(props) => {
        switch (props.variant) {
            case "primary":
                return primaryButton;
            case "secondary":
                return secondaryButton;
            default:
                return defaultButton;
        }
    }};
`;
