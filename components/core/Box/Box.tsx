"use client";

import { JSX } from "react";
import styled from "styled-components";

/**
 * `Box` is a flexible layout component used for spacing, alignment, and layout structure.
 * It wraps a `div` and accepts common layout props like `display`, `padding`, and `textAlign`.
 */

interface BoxProps {
    display?: string;
    flexdirection?: string;
    justifycontent?: string;
    alignitems?: string;
    padding?: string;
    margin?: string;
    width?: string;
    maxwidth?: string;
    textalign?: string;
    gap?: string;
    as?: keyof JSX.IntrinsicElements;
}

const Box = styled.div<BoxProps>`
    display: ${({ display }) => display || "block"};
    flex-direction: ${({ flexdirection }) => flexdirection};
    justify-content: ${({ justifycontent }) => justifycontent};
    align-items: ${({ alignitems }) => alignitems};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    max-width: ${({ maxwidth }) => maxwidth};
    text-align: ${({ textalign }) => textalign};
    gap: ${({ gap }) => gap};
`;

export default Box;
