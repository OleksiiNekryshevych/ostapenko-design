import './global.scss';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

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
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
