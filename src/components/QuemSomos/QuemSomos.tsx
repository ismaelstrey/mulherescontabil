import Profissionais from "../pages/Profissionais";
import NossaMissao from "../pages/NossaMissao";
import NossosValores from "../pages/NossosValores";
import QuemSomos from "../pages/QuemSomos";

export function HomePage() {
  return (
    <>
      <QuemSomos />
      <Profissionais />
      <NossaMissao />
      <NossosValores />
    </>
  );
}
