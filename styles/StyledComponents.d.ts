import "styled-components";
import {
    AppBreakpointsType,
    AppColorsType,
    AppFontWeightType,
    AppFSType,
    AppLineHeightsType,
    AppSpacingType,
    AppLayoutType,
} from "./DesignVariables";

declare module "styled-components" {
    export interface DefaultTheme {
        theme: "cyberNewsTheme";
        colors: AppColorsType;
        media: AppBreakpointsType;
        fontWeights: AppFontWeightType;
        fontSizes: AppFSType;
        lineHeights: AppLineHeightsType;
        spacings: AppSpacingType;
        layout: AppLayoutType;
    }
}
