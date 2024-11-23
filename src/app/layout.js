import "@/styles/globals.css";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Hack The Space",
  description:
    "Hack The Space is an exciting 24-hour offline hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀 that takes place in Bhilai, Chhattisgarh",
  openGraph: {
    title: "Hack The Space",
    description:
      "Hack The Space is an exciting 24-hour offline hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀 that takes place in Bhilai, Chhattisgarh",
    url: "https://hackthespace.co",
    siteName: "Hack The Space",
    type: "website",
  },
  twitter: {
    title: "Hack The Space",
    description:
      "Hack The Space is an exciting 24-hour offline hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀 that takes place in Bhilai, Chhattisgarh",
    url: "https://x.com/HackTheSpace_",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
