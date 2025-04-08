import React from "react";
import {
    CheckBoxContainerStyled,
    CheckBoxLabelStyled,
    CheckBoxStyled,
} from "./checkbox.styled";

/**
 * Checkbox component for user input.
 * @param {string} label - The label for the checkbox.
 * @param {boolean} checked - The checked state of the checkbox.
 * @param {function} onClick - Callback function for checkbox click event.
 * @param {function} onChange - Callback function for checkbox change event.
 */

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <React.Fragment>
            <CheckBoxContainerStyled>
                <CheckBoxStyled
                    type="checkbox"
                    onChange={onChange}
                    checked={checked}
                />
                <CheckBoxLabelStyled>{label}</CheckBoxLabelStyled>
            </CheckBoxContainerStyled>
        </React.Fragment>
    );
};

export default Checkbox;
