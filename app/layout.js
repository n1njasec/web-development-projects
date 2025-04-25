import "./globals.css";

export const metadata = {
  title: "Sistema de Reservas",
  description: "Sistema de Reservas de mesas de um restaurante!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
