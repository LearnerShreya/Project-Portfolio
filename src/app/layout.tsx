import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Singh | Portfolio",
  description: "Data Scientist & Developer Portfolio - Shreya Singh",
  keywords: ["Data Science", "Machine Learning", "Web Development", "Portfolio"],
  authors: [{ name: "Shreya Singh" }],
  creator: "Shreya Singh",
  openGraph: {
    title: "Shreya Singh | Portfolio",
    description: "Data Scientist & Portfolio",
    type: "website",
  },
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
