import { poppins } from "./font";
import "./globals.css";

export const metadata = {
  title: "Shree Mahuva Jain Bhojanshala",
  description: "A place for peace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
