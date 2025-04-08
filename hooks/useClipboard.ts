import { useCallback, useState } from "react";

export const useClipboard = () => {
    const [copySuccess, setCopySuccess] = useState("");

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess("Copied to Clipboard!");
            setTimeout(() => setCopySuccess(""), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    }, []);

    return { copySuccess, copyToClipboard };
};
