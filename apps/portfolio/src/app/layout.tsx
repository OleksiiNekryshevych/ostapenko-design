import './global.scss';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const metadata = {
  title: 'Oleksii Ostapenko - Portfolio',
  description: 'Product-minded designer & Front-end Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
