import React from "react";
import { CheckBoxContainerStyled, CheckBoxLabelStyled, CheckBoxStyled } from "./checkbox.styled";

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, onClick, checked, onChange }: CheckboxProps) => {
    return (
        <React.Fragment>
            <CheckBoxContainerStyled>
                <CheckBoxStyled type="checkbox" onClick={onClick} onChange={onChange} checked={checked} />
                <CheckBoxLabelStyled>{label}</CheckBoxLabelStyled>
            </CheckBoxContainerStyled>
        </React.Fragment>
    );
};

export default Checkbox;
