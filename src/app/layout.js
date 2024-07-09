import "@/styles/globals.css";

export const metadata = {
  title: "Hack The Space",
  description: "Think Build Launch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
