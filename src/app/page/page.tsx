import {
  NossaMissao,
  NossosValores,
  Profissionais,
  QuemSomos,
} from "@/components/custonPages";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { Template } from "@/components/Template";
import React from "react";

export default function HomePage() {
  return (
    <Template>
      <Hero />
      <QuemSomos />
      <Profissionais />
      <NossaMissao />
      <NossosValores />
      <Footer />
    </Template>
  );
}
