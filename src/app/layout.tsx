import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AI Club DAIICT",
    description: "Official website of AI Club DAIICT",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}