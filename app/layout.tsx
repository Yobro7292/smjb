import { poppins } from "./font";

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
    <html lang="en">
      <body className={poppins.className}>
          {children}
      </body>
    </html>
  );
}
