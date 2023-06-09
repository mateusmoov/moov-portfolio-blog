import localFont from "@next/font/local";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import "./globals.css";

const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito-Light.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Nunito-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Nunito-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
      </div>
      <body>{children}</body>
    </html>
  );
}
