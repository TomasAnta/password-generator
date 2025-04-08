"use client";

import styled, { css } from "styled-components";
import { fontSizes, fontWeights, lineHeights, colors } from "@styles/DesignVariables";

export type TypographyVariant =
    | "noticeText"
    | "paragraph"
    | "buttonText"
    | "inputText"
    | "checkBoxText"
    | "subheading"
    | "heading"
    | "largeHeading";

const variantStyles = {
    noticeText: css`
        font-size: ${fontSizes.noticeText};
        font-weight: ${fontWeights.normal};
        line-height: ${lineHeights.noticeText};
        color: ${colors.noticeTextColor};

        span {
            font-weight: ${fontWeights.bold};
        }
    `,
    paragraph: css`
        font-size: ${fontSizes.paragraph};
        font-weight: ${fontWeights.normal};
        line-height: ${lineHeights.paragraph};
        color: ${colors.paragraphColor};
    `,
    buttonText: css`
        font-size: ${fontSizes.buttonText};
        font-weight: ${fontWeights.medium};
        line-height: ${lineHeights.buttonText};
        color: ${colors.buttonTextColor};
    `,
    inputText: css`
        font-size: ${fontSizes.inputText};
        font-weight: ${fontWeights.normal};
        line-height: ${lineHeights.inputText};
        color: ${colors.inputTextColor};
    `,
    checkBoxText: css`
        font-size: ${fontSizes.checkBoxText};
        font-weight: ${fontWeights.normal};
        line-height: ${lineHeights.checkBoxText};
        color: ${colors.checkboxTextColor};
    `,
    subheading: css`
        font-size: ${fontSizes.subheading};
        font-weight: ${fontWeights.normal};
        line-height: ${lineHeights.subheading};
        color: ${colors.subheadingColor};
    `,
    heading: css`
        font-size: ${fontSizes.heading};
        font-weight: ${fontWeights.bold};
        line-height: ${lineHeights.heading};
        color: ${colors.headingColor};
    `,
    largeHeading: css`
        font-size: ${fontSizes.largeHeading};
        font-weight: ${fontWeights.bold};
        line-height: ${lineHeights.largeHeading};
        color: ${colors.largeHeadingColor};
    `,
};

export const StyledTypography = styled.p<{ $variant: TypographyVariant }>`
    margin: 0;
    ${({ $variant }) => variantStyles[$variant]}
`;
