import { Servicos } from "@/components/custonPages/Servicos";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { Template } from "@/components/Template";
import React from "react";

export default function HomePage() {
  return (
    <Template>
      <Hero />
      <Servicos />
      <Footer />
    </Template>
  );
}
