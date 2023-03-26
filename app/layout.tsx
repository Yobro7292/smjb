import "./globals.css";

export const metadata = {
  title: "Wlcome to SMJB",
  description: "A place for peace.",
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
