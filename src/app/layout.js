import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Clone",
  description: "Developed by Sanjaya Gayan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen font-sans">
        {children}
        <Footer/>
      </body>
    </html>
  );
}

