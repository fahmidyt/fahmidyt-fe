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
            { children }
        </body>
      </html>
    );
  }
