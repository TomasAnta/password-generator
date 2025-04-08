"use client";

import styled from "styled-components";
import { responsiveBreakPoints } from "@styles/DesignVariables";

export const ContentWrapper = styled.div<{ $flexReverse: boolean }>`
    display: flex;
    flex-direction: ${({ $flexReverse }) =>
        $flexReverse ? "row-reverse" : "row"};
    align-items: center;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px;

    @media ${responsiveBreakPoints.maxSmallDesktop} {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div<{ $containerWidth: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    width: ${({ $containerWidth }) => `calc(100% - ${$containerWidth}%)`};

    @media ${responsiveBreakPoints.maxSmallDesktop} {
        width: 100%;
        margin-top: 40px;
    }
`;

export const TextContainer = styled.div<{ $containerWidth: number }>`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 120px;
    width: ${({ $containerWidth }) => `${$containerWidth}%`};
    margin-bottom: 16px;

    @media ${responsiveBreakPoints.maxSmallDesktop} {
        width: 100%;
        margin-top: 40px;
    }
`;
