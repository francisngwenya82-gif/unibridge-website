import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UniBridge Consultancy - Your Bridge to Higher Education',
  description: 'Expert university counseling and admission guidance for international students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
