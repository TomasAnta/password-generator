"use client";

import styled from "styled-components";
import { fontSizes, colors, lineHeights, fontWeights } from "@styles/DesignVariables";

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 50px;
    font-size: ${fontSizes.inputText};
    color: ${colors.inputTextColor};
    font-weight: ${fontWeights.bold};
    line-height: ${lineHeights.inputText};
    outline: none;
    padding: 0 24px;
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #666;
    transition: color 0.2s ease;
`;
