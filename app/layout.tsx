import Navbar from '#/components/layouts/Navbar';
import '#/styles/dist.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="id">
        <head />
        <body className="overflow-y-scroll">
            <Navbar />
            { children }
        </body>
      </html>
    );
  }
