import './global.scss';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { RouteChangeScroll } from '../components/RouteChangeScroll/RouteChangeScroll';

export const metadata = {
  title: 'Alina Ostapenko',
  description: 'Product-minded designer & Front-end Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RouteChangeScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
