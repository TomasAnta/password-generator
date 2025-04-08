export const layout = {
    maxWidth: "1160px",
    padding: "0 24px",
};

export type AppLayoutType = typeof layout;

export const colors = {
    backgroundBlack: "#111",
    noticeTextColor: "#9E9FA4",
    headingColor: "#000",
    largeHeadingColor: "#fff",
    subheadingColor: "#fff",
    inputTextColor: "#333",
    checkboxTextColor: "#fff",
    paragraphColor: "#7A7A7A",
    buttonBackground: "#09A858",
    buttonHoverBackground: "#098858",
    buttonTextColor: "#fff",
    inputBackground: "#fff",
    notificationBackground: "#9E9FA4",
    notificationTextColor: "#fff",
};

export type AppColorsType = typeof colors;

export const responsiveBreakPoints = {
    maxSmallPhone: "(max-width: 380px)",
    maxPhone: "(max-width: 480px)",
    maxTablet: "(max-width: 768px)",
    maxSmallDesktop: "(max-width: 992px)",
    maxDefaultDesktop: "(max-width: 1200px)",
    maxMediumDesktop: "(max-width: 1440px)",
};

export type AppBreakpointsType = typeof responsiveBreakPoints;

export const fontSizes = {
    notificationText: "12px",
    noticeText: "12px",
    paragraph: "16px",
    buttonText: "16px",
    inputText: "20px",
    checkBoxText: "12px",
    subheading: "16px",
    heading: "31px",
    largeHeading: "40px",
};

export type AppFSType = typeof fontSizes;

export const lineHeights = {
    notificationText: "12px",
    noticeText: "12px",
    paragraph: "26px",
    buttonText: "16px",
    inputText: "20px",
    checkBoxText: "22.4px",
    subheading: "22.4px",
    heading: "22.4px",
    largeHeading: "52px",
};

export type AppLineHeightsType = typeof lineHeights;

export const spacings = {
    s8: "8px",
    s10: "10px",
    s12: "12px",
    s14: "14px",
    s16: "16px",
    s20: "20px",
    s24: "24px",
    s32: "32px",
    s34: "34px",
    s36: "36px",
    s38: "38px",
    s40: "40px",
};

export type AppSpacingType = typeof spacings;

export const fontWeights = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
};

export type AppFontWeightType = typeof fontWeights;
