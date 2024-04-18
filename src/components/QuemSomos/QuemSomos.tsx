import {
  NossaMissao,
  NossosValores,
  Profissionais,
  QuemSomos,
} from "@/components/custonPages";

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
