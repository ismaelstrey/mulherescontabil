import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { QuemSomos } from "@/components/QuemSomos";
import Template from "@/components/Template/Template";

export default function Home() {
  return (
    <Template>
      <Hero />
      <QuemSomos />
      <Footer />
    </Template>
  );
}
