import { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; 

export const metadata = {
  title: 'Modern Walk', 
  description: 'A fashion retail web app for modern styles.',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-2xl font-bold text-center">
            <div className="text-black no-underline hover:text-gray-700">
              Modern Walk
            </div>
          </h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}