import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
const poppins = Poppins({ subsets: ["latin"],weight:'500' });
export const metadata: Metadata = {
  title: "KappaTv Website",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="mx-auto ">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
