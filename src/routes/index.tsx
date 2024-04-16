import { Title } from "@solidjs/meta";
import { JSX } from "solid-js";
import Language from "~/components/Language";

const JOB: { [key: string]: string } = {
  en: "Computer Enginner",
  ptbr: "Engenheiro de Computação",
};
const INTRODUCTION: { [key: string]: JSX.Element } = {
  en: (
    <>
      <p class="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        fringilla, risus vitae aliquam porta, orci massa convallis ipsum, a
        sodales nulla nunc in est. Vivamus quis tincidunt erat, nec hendrerit
        justo. Aliquam a venenatis diam. Praesent convallis ipsum turpis, nec
        suscipit mauris euismod et. Ut commodo egestas imperdiet. Nulla ut elit
        nunc. Vivamus odio libero, euismod vel nisl vitae, euismod tempor leo.
        Duis congue orci fringilla sem venenatis, sit amet congue metus
        lobortis. Sed nec nisi quam. Pellentesque in lectus ac ex feugiat
        egestas at sit amet sapien. Suspendisse tincidunt justo at congue
        laoreet. Duis feugiat orci vel leo tempus, nec lacinia arcu sagittis.
        Aliquam fringilla blandit facilisis. Curabitur commodo arcu et lectus
        eleifend fringilla.
      </p>
      <p>
        Pellentesque tellus nibh, egestas eget vehicula vitae, tempor sed orci.
        Suspendisse tincidunt eleifend felis, ac pellentesque dui facilisis non.
        Sed vitae magna nec leo hendrerit egestas. Aliquam viverra libero at
        quam tempus, sed dignissim orci tincidunt. Mauris eu elit a nunc
        porttitor condimentum. Ut non neque at felis varius blandit ac a nibh.
        Nunc posuere porta fringilla. Praesent accumsan rhoncus justo vel
        bibendum. Mauris eget gravida orci.
      </p>
    </>
  ),
  ptbr: <p>Engenheiro de Computação</p>,
};

export default function Home() {
  const { lang } = Language;
  return (
    <>
      <Title>Miguel Taciano</Title>
      <main class="text-center mx-auto text-stone-700 p-4">
        <h1 class="font-serif text-8xl mt-16 mb-4">Miguel Taciano</h1>
        <h2 class="font-serif text-4xl mb-12">{JOB[lang()]}</h2>
        <article class="text-lg text-justify max-w-xl mx-auto leading-relaxed">
          {INTRODUCTION[lang()]}
        </article>
      </main>
    </>
  );
}
