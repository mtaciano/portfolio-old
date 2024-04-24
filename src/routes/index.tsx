import { Title } from "@solidjs/meta";
import { JSX } from "solid-js";
import Language from "~/components/Language";
import Anchor from "~/components/Anchor";

const JOB: { [key: string]: string } = {
  en: "Computer Engineer",
  ptbr: "Engenheiro de Computação",
};

const INTRODUCTION: { [key: string]: () => JSX.Element } = {
  en: () => (
    <>
      <p>
        Hello! I'm a computer engineer who recently received my bachelor's
        degree from{" "}
        <Anchor href="https://www.unifesp.br" target="_blank">
          Universidade Federal de São Paulo
        </Anchor>{" "}
        in Brazil. I'm interested in all computer-related fields, such as web
        development, security and cryptography, language design, embedded
        systems and more. My current most-used languages are C, Python and Rust.
      </p>
      <p class="mt-4">
        During my time at the university, my most researched fields were Machine
        learning (mainly Reinforcement Learning) and Computer Vision. In that
        period, I developed a{" "}
        <Anchor href="https://doi.org/10.5753/wvc.2023.27545" target="_blank">
          Jigsaw Puzzle Solver
        </Anchor>{" "}
        that used Semantic Segmentation and Machine Learning to solve jigsaw
        puzzles (visual puzzles).
      </p>
      <p class="mt-4">
        My other big project was the development of a{" "}
        <Anchor href="https://github.com/mtaciano/fpgmips" target="_blank">
          32-bit RISC CPU
        </Anchor>{" "}
        using FPGAs (Field-Programmable Gate Arrays) and Verilog, for which a
        subset of the C programming language called{" "}
        <Anchor href="https://github.com/mtaciano/cmc" target="_blank">
          C-
        </Anchor>{" "}
        was developed. My current side project is a{" "}
        <Anchor href="https://github.com/mtaciano/sol" target="_blank">
          rewrite
        </Anchor>{" "}
        of it, with better code, more features and fewer bugs!
      </p>
    </>
  ),
  ptbr: () => (
    <>
      <p>
        Olá! Eu sou um recém-formado engenheiro de computação pela{" "}
        <Anchor href="https://www.unifesp.br" target="_blank">
          Universidade Federal de São Paulo
        </Anchor>
        . Eu tenho interesse em diversos campos relacionados a computação.
        Alguns exemplos são: desenvolvimento web, segurança e criptografia,
        desenvolvimento de linguagens de programação, sistemas embarcados e
        mais. Minhas linguagens mais utilizadas atualmente são C, Python e Rust.
      </p>
      <p class="mt-4">
        Durante meu tempo na universidade, o campo de pesquisa que mais investi
        foi o de aprendizado de máquina (principalmente aprendizado por reforço)
        e visão computacional. Durante esse período, eu desenvolvi uma abordagem
        de{" "}
        <Anchor href="https://doi.org/10.5753/wvc.2023.27545" target="_blank">
          resolução de quebra-cabeças
        </Anchor>{" "}
        que utiliza segmentação semântica e aprendizado de máquina para resolver
        quebra-cabeças visuais.
      </p>
      <p class="mt-4">
        Meu outro grande projeto foi o desenvolvimento de um{" "}
        <Anchor href="https://github.com/mtaciano/fpgmips" target="_blank">
          Processador 32-bit RISC
        </Anchor>{" "}
        utilizando FPGAs (Field-Programmable Gate Arrays) e Verilog, o qual
        envolveu também o desenvolvimento de um subconjunto da linguagem C
        chamado{" "}
        <Anchor href="https://github.com/mtaciano/cmc" target="_blank">
          C-
        </Anchor>
        . Meu projeto atual é o desenvolvimento de um{" "}
        <Anchor href="https://github.com/mtaciano/sol" target="_blank">
          sucessor
        </Anchor>{" "}
        do subconjunto de C desenvolvido anteriormente, mas com melhor código,
        mais funcionalidades e menos bugs!
      </p>
    </>
  ),
};

export default function Home() {
  const { lang } = Language;
  const job = () => JOB[lang()];
  const intro = () => INTRODUCTION[lang()]();

  return (
    <>
      <Title>Miguel Taciano</Title>
      <main class="text-center text-stone-700">
        <h1 class="font-serif text-6xl sm:text-8xl mt-12 mb-2">
          Miguel Taciano
        </h1>
        <h2 class="font-serif text-2xl sm:text-4xl mb-4 sm:mb-6">{job()}</h2>
        <article class="text-lg sm:text-base text-justify mx-6 sm:max-w-xl sm:mx-auto leading-relaxed sm:leading-loose">
          <img
            class="sm:float-left h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden mx-auto mb-4 sm:mb-0 sm:mr-3"
            src="/images/profile.jpeg"
            alt="Profile picture"
          />
          {intro()}
        </article>
      </main>
    </>
  );
}
