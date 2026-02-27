import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vasyapp | Telegram Client with Voice Transcription",
  description: "Experience Telegram like never before. Auto-transcribe voice messages, manage multiple accounts, and enjoy privacy with local processing.",
  icons: {
    icon: '/vasyapp.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
