"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Typography from "@components/ui/typography/Typography";
import {
    GeneratorStyled,
    PasswordChoices,
    PasswordInput,
} from "./generator.styled";
import { Button } from "@components/ui/button/Button";
import Input from "@components/ui/input/Input";
import ReloadArrow from "@assets/icons/ReloadArrow";
import Spacer from "@components/core/Spacer/Spacer";
import { useClipboard } from "@hooks/useClipboard";
import Checkbox from "@components/ui/checkbox/Checkbox";
import { generatePassword } from "@utils/passwordUtils";

const DEFAULT_PASSWORD_LENGTH = 20;

const Generator = () => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const { copySuccess, copyToClipboard } = useClipboard();
    const [isLowerCase, setIsLowerCase] = useState(true);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSpecialSymbols, setIsSpecialSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const handleGeneratePassword = useCallback(() => {
        const newPassword = generatePassword(
            DEFAULT_PASSWORD_LENGTH,
            isUpperCase,
            isLowerCase,
            isNumbers,
            isSpecialSymbols
        );
        setPassword(newPassword);
    }, [isUpperCase, isLowerCase, isNumbers, isSpecialSymbols]);

    // Generate a new password whenever any Checkbox option changes, or on first render.
    useEffect(() => {
        handleGeneratePassword();
    }, [handleGeneratePassword]);

    // Checkbox handlers
    const handleToggleLowerCase = () => setIsLowerCase((prev) => !prev);
    const handleToggleUpperCase = () => setIsUpperCase((prev) => !prev);
    const handleToggleNumbers = () => setIsNumbers((prev) => !prev);
    const handleToggleSymbols = () => setIsSpecialSymbols((prev) => !prev);

    return (
        <GeneratorStyled>
            <Typography variant="largeHeading" as="h1">
                Generate strong passwords
            </Typography>

            <Spacer $margin="8px 0">
                <Typography variant="subheading" as="p">
                    Upgrade the security of your online accounts.
                </Typography>
            </Spacer>
            <Typography variant="subheading" as="p">
                Create strong passwords that are completely random and
                impossible to guess.
            </Typography>

            <PasswordInput>
                <Input
                    ref={passwordRef}
                    value={password}
                    readOnly
                    icon={
                        <ReloadArrow
                            onClick={handleGeneratePassword}
                            style={{ cursor: "pointer" }}
                            aria-label="Generate a new password"
                        />
                    }
                />
                <Button
                    onClick={() =>
                        copyToClipboard(passwordRef.current?.value || "")
                    }
                    $variant="primary"
                    aria-label="Copy generated password"
                >
                    {copySuccess ? "Copied" : "Copy Password"}
                </Button>
            </PasswordInput>

            <PasswordChoices>
                <Checkbox
                    checked={isLowerCase}
                    label="lower case"
                    onChange={handleToggleLowerCase}
                />
                <Checkbox
                    checked={isUpperCase}
                    label="upper case"
                    onChange={handleToggleUpperCase}
                />
                <Checkbox
                    checked={isSpecialSymbols}
                    label="special symbols"
                    onChange={handleToggleSymbols}
                />
                <Checkbox
                    checked={isNumbers}
                    label="numbers"
                    onChange={handleToggleNumbers}
                />
            </PasswordChoices>
        </GeneratorStyled>
    );
};

export default Generator;
