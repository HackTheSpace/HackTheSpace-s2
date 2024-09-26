import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Loader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
