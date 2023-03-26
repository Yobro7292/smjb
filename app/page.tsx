import Banner from "@/components/Banner/Index";
import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";
import Map from "@/components/Map/Index";
import Section from "@/components/Section/Index";
import Testimonial from "@/components/Testimonial/Index";
import { Inter, Alata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const alata = Alata({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Section />
      <Testimonial />
      <Map />
      <Footer />
    </main>
  );
}
