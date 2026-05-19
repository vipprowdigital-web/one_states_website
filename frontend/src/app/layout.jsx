import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/common/ContactForm";
import AppConfigInitializer from "@/components/appConfigInitilizer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "One States",
  description: "One States",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-secondary">
        <AppConfigInitializer>
          <Navbar />
          {children}
          <ContactForm />
          <Footer />
        </AppConfigInitializer>
      </body>
    </html>
  );
}
