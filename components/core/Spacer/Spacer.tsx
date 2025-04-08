"use client";

import styled from "styled-components";

/**
 * Spacer component to create space between elements.
 * @param {string} $margin - The margin to apply to the spacer.
 */

const Spacer = styled.div<{ $margin?: string }>`
    $margin: ${({ $margin }) => $margin || "0px"};
`;

export default Spacer;
