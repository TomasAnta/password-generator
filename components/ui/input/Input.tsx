import React from "react";
import { StyledInput, IconWrapper, InputWrapper } from "./input.styled";

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
