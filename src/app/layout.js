import {Mulish} from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Gids Finance",
  description: "Gideões Internacionais do Brasil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
