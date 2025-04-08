"use client";

import styled from "styled-components";
import {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    responsiveBreakPoints,
} from "@styles/DesignVariables";

export const CheckBoxContainerStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 9px;
    cursor: pointer;

    @media ${responsiveBreakPoints.maxSmallDesktop} {
        flex-direction: column;
    }
`;

export const CheckBoxStyled = styled.input`
    width: 20px;
    height: 20px;
`;

export const CheckBoxLabelStyled = styled.label`
    font-size: ${fontSizes.checkBoxText};
    line-height: ${lineHeights.checkBoxText};
    font-weight: ${fontWeights.normal};
    color: ${colors.checkboxTextColor};
    margin-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
