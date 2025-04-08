import React from "react";
import { StyledTypography, TypographyVariant } from "./typography.styled";

/**
 * `Typography` is a reusable text component that handles various text styles
 * (e.g., headings, paragraphs, notice text).
 *
 * @param variant - Text style variant (e.g., "heading", "paragraph")
 * @param children - Content to render inside the text element
 */

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    as?: React.ElementType;
    children: React.ReactNode;
}

const Typography = ({ variant = "paragraph", as = "p", children, ...props }: TypographyProps) => {
    return (
        <StyledTypography as={as} $variant={variant} {...props}>
            {children}
        </StyledTypography>
    );
};

export default Typography;
