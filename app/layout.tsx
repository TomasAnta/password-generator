import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeRegistry from "../styles/ThemeRegistry";

export const metadata: Metadata = {
    title: "Password Generator | CyberNews",
    description:
        "Generate strong passwords with our secure password generator. Customize length and complexity for maximum security.",
};

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={roboto.variable}>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}
