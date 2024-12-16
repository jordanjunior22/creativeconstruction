import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappChatButton";
export const metadata = {
  title: "Construction",
  description: "The Best Construction Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=''>
      <Navbar/>
        {children}
        <Footer/>
        <WhatsAppButton 
        phoneNumber="+237674299737"  // Replace with your phone number (include country code)
        message="Hello, Creative Contruction"  // Pre-filled message
      />
      </body>
    </html>
  );
}
