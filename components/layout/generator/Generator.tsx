"use client";
import { useRef, useState } from "react";
import Typography from "@components/ui/typography/Typography";
import { GeneratorStyled, PasswordChoices, PasswordInput } from "./generator.styled";
import { Button } from "@components/ui/button/Button";
import Input from "@components/ui/input/Input";
import ReloadArrow from "@assets/icons/ReloadArrow";
import Spacer from "@components/core/Spacer/Spacer";
import Notification from "@components/ui/notification/Notification";
import { useClipboard } from "@hooks/useClipboard";
import Checkbox from "@components/ui/checkbox/Checkbox";

const Generator = () => {
    const textAreaRef = useRef<HTMLInputElement>(null);
    const { copySuccess, copyToClipboard } = useClipboard();
    const [isLowerCase, setIsLowerCase] = useState(true);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSpecialSymbols, setIsSpecialSymbols] = useState(false);

    const passwordLength = 20;
    const PASSWORD = generatePassword(passwordLength, isUpperCase, isLowerCase, isNumbers, isSpecialSymbols);

    function generatePassword(
        length: number,
        isUpperCase: boolean,
        isLowerCase: boolean,
        isNumbers: boolean,
        isSpecialSymbols: boolean
    ) {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialSymbols = "!@#$%^&*()_+[]{}|;:,.<>?";
        let password = "";
        let combined = "";

        if (isUpperCase) {
            combined += uppercase;
        }

        if (isLowerCase) {
            combined += lowercase;
        }

        if (isNumbers) {
            combined += numbers;
        }

        if (isSpecialSymbols) {
            combined += specialSymbols;
        }

        for (let i = 0; i < length; i++) {
            const randomCharacterIndex = Math.floor(Math.random() * combined.length);
            const randomCharacter = combined[randomCharacterIndex];
            password += randomCharacter;
        }

        return password;
    }

    return (
        <GeneratorStyled>
            <Spacer margin="56px 0 0 0">
                <Typography variant="largeHeading" as="h1">
                    Generate strong passwords
                </Typography>
            </Spacer>
            <Spacer margin="8px 0">
                <Typography variant="subheading" as="p">
                    Upgrade the security of your online accounts.
                </Typography>
            </Spacer>
            <Typography variant="subheading" as="p">
                Create strong passwords that are completely random and impossible to guess.
            </Typography>
            <PasswordInput>
                <Input value={PASSWORD} readOnly icon={<ReloadArrow />} ref={textAreaRef} />
                <Button onClick={() => copyToClipboard(textAreaRef.current?.value || "")} variant="primary">
                    Copy Password {copySuccess && <Notification message={copySuccess} />}
                </Button>
            </PasswordInput>
            <PasswordChoices>
                <Checkbox checked={isLowerCase} label="lower case" onChange={() => setIsLowerCase(!isLowerCase)} />
                <Checkbox checked={isUpperCase} label="upper case" onChange={() => setIsUpperCase(!isUpperCase)} />
                <Checkbox
                    checked={isSpecialSymbols}
                    label="special symbols"
                    onChange={() => setIsSpecialSymbols(!isSpecialSymbols)}
                />
                <Checkbox checked={isNumbers} label="numbers" onChange={() => setIsNumbers(!isNumbers)} />
            </PasswordChoices>
        </GeneratorStyled>
    );
};

export default Generator;
