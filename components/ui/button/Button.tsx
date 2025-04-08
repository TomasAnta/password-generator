import { forwardRef } from "react";

import { ButtonVariants, StyledButton } from "./button.styled";

/**
 * `Button` is a reusable button component that handles various button styles
 * (e.g., primary, secondary, tertiary).
 *
 * @param $variant - Button style variant (e.g., "primary", "secondary")
 * @param children - Content to render inside the button
 * @param className - Additional class names for styling
 * @param onClick - Click event handler
 */

interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
    $variant: ButtonVariants;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button = forwardRef<any, ButtonProps>(
    ({ $variant, children, className, onClick, ...props }, ref) => (
        <StyledButton
            ref={ref}
            {...props}
            $variant={$variant}
            className={className}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
);

Button.displayName = "Button";
