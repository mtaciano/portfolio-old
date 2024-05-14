import { Title } from "@solidjs/meta";
import { JSX } from "solid-js";
import Language from "~/components/Language";
import Anchor from "~/components/Anchor";

const JOB: { [key: string]: string } = {
  en: "Computer::Engineer",
  ptbr: "Engenheiro::de::Computação",
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
        using FPGAs (Field-Programmable Gate Arrays) and Verilog, for which I
        also developed an accompanying compiler based on a{" "}
        <Anchor href="https://github.com/mtaciano/cmc" target="_blank">
          small subset
        </Anchor>{" "}
        of the C programming language. My current side project is a{" "}
        <Anchor href="https://github.com/mtaciano/sol" target="_blank">
          complete rewrite
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
          Unifesp
        </Anchor>{" "}
        (Universidade Federal de São Paulo). Eu tenho interesse em diversos
        campos relacionados a computação. Alguns exemplos são: desenvolvimento
        web, segurança e criptografia, desenvolvimento de linguagens de
        programação, sistemas embarcados e mais. Minhas linguagens mais
        utilizadas atualmente são C, Python e Rust.
      </p>
      <p class="mt-4">
        Durante meu tempo na universidade, o campo de pesquisa em que mais
        investi foi o de aprendizado de máquina (principalmente aprendizado por
        reforço) e visão computacional. Durante esse período, eu desenvolvi uma
        abordagem de{" "}
        <Anchor href="https://doi.org/10.5753/wvc.2023.27545" target="_blank">
          resolução de quebra-cabeças
        </Anchor>{" "}
        que utiliza segmentação semântica e aprendizado de máquina para resolver
        quebra-cabeças visuais.
      </p>
      <p class="mt-4">
        Meu outro grande projeto foi o desenvolvimento de um{" "}
        <Anchor href="https://github.com/mtaciano/fpgmips" target="_blank">
          processador 32-bit RISC
        </Anchor>{" "}
        utilizando FPGAs (Field-Programmable Gate Arrays) e Verilog, o qual
        envolveu também o desenvolvimento de um compilador para um pequeno{" "}
        <Anchor href="https://github.com/mtaciano/cmc" target="_blank">
          subconjunto da linguagem C
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
      <main class="text-center text-stone-800">
        <div class="flex justify-center w-full">
          <h1 class="text-cyan-950 underline underline-offset-[6px] sm:underline-offset-8 decoration-[6px] sm:decoration-8 decoration-cyan-500 sm:decoration-cyan-600 -skew-y-2 font-serif text-5xl sm:text-8xl mt-6 sm:mt-10 mb-2">
            Miguel Taciano
          </h1>
        </div>
        <h2 class="text-cyan-950 font-mono font-medium tracking-tight text-xl sm:text-4xl mb-4 sm:mb-10">
          {job()}
        </h2>
        <article class="text-lg sm:text-base text-justify mx-6 sm:max-w-xl sm:mx-auto leading-relaxed sm:leading-loose">
          <img
            class="transition-all duration-200 sm:hover:-rotate-2 sm:float-left h-32 w-32 sm:h-40 sm:w-40 rounded-3xl overflow-hidden mx-auto mb-4 sm:mb-0 sm:mr-3"
            src="/images/profile.jpeg"
            alt="Profile picture"
          />
          {intro()}
        </article>
      </main>
    </>
  );
}
