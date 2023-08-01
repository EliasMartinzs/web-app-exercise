import Navbar from '@/components/Navbar';
import './globals.css';
import { ReduxProvider } from './redux/provider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Exercises App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
