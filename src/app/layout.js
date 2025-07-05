import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';
import { ModalProvider } from '@/context/ModalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import 'intl-tel-input/build/css/intlTelInput.css';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500','600','700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Brand Protection Services',
  description: 'Protect and manage your brand reputation online',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </ModalProvider>
      </body>
    </html>
  );
}
