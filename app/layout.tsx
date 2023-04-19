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
      <body>
        <div className="w-full min-w-full min-h-screen h-screen flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
