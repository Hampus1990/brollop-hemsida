export const metadata = {
  title: "Hampus & Kelsi",
  description: "Bröllop 22 augusti 2026"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
