"use client";
import { colors, fontSizes, lineHeights } from "@styles/DesignVariables";
import styled from "styled-components";

export const NotificationContainer = styled.div`
    position: absolute;
    bottom: 55px;
    background: ${colors.notificationBackground};
    color: ${colors.notificationTextColor};
    border-radius: 8px;
    padding: 4px 8px;
    font-size: ${fontSizes.notificationText};
    line-height: ${lineHeights.notificationText};
    transition: opacity 0.4s;
`;
