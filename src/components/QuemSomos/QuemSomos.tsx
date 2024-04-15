import Motion from "../pages/Motion";
import { NossaMissao } from "../pages/NossaMissao";
import { NossosValores } from "../pages/NossosValores";
import { Profissionais } from "../pages/Profissionais";
import { QuemSomos } from "../pages/QuemSomos";

export function HomePage() {
  return (
    <>
      <Motion>
        <QuemSomos />
      </Motion>
      <Motion>
        <Profissionais />
      </Motion>
      <Motion>
        <NossaMissao />
      </Motion>
      <Motion>
        <NossosValores />
      </Motion>
    </>
  );
}
