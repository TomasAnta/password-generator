"use client";

/**
 * Generates a random password based on the provided configuration.
 *
 * @param length - Length of the generated password.
 * @param isUpperCase - Include uppercase letters if true.
 * @param isLowerCase - Include lowercase letters if true.
 * @param isNumbers - Include numeric characters if true.
 * @param isSpecialSymbols - Include special characters if true.
 * @returns A randomly generated password string.
 */
export function generatePassword(
    length: number,
    isUpperCase: boolean,
    isLowerCase: boolean,
    isNumbers: boolean,
    isSpecialSymbols: boolean
): string {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialSymbols = "!@#$%^&*()_+[]{}|;:,.<>?";

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
    if (!combined) {
        combined = lowercase;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * combined.length);
        password += combined[randomIndex];
    }

    return password;
}
