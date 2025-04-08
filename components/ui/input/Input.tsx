import React from "react";
import { StyledInput, IconWrapper, InputWrapper } from "./input.styled";

/**
 * Input component for user input.
 * @param {string} value - The value of the input.
 * @param {function} onChange - Callback function to handle input changes.
 * @param {string} placeholder - Placeholder text for the input.
 * @param {boolean} readOnly - Flag to make the input read-only.
 * @param {React.ReactNode} icon - Icon to display inside the input.
 * @param {function} onIconClick - Callback function for icon click event.
 */

type Props = {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    icon?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement>;
    onIconClick?: () => void;
};

const Input = ({
    value,
    onChange,
    placeholder,
    readOnly = false,
    icon,
    onIconClick,
    ref,
}: Props) => {
    return (
        <InputWrapper>
            <StyledInput
                type="text"
                value={value}
                onChange={onChange}
                ref={ref}
                placeholder={placeholder}
                readOnly={readOnly}
            />
            {icon && <IconWrapper onClick={onIconClick}>{icon}</IconWrapper>}
        </InputWrapper>
    );
};

export default Input;
