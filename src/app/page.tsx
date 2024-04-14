import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { HomePage } from "@/components/QuemSomos/QuemSomos";
import Template from "@/components/Template/Template";

export default function Home() {
  return (
    <Template>
      <Hero />
      <HomePage />
      <Footer />
    </Template>
  );
}
