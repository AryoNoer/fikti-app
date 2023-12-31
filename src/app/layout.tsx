import type { Metadata } from "next";
import { Lato, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/oprec/navbar";
import Footer from "@/components/footer";

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export const metadata: Metadata = {
  title: "Open Recruitment Volunteer Bem Fikti UG",
  description: "Generated by PTI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}