"use client";

import styled from "styled-components";

const Spacer = styled.div<{ margin?: string }>`
    margin: ${({ margin }) => margin || "0px"};
`;

export default Spacer;
