import { Title } from "@solidjs/meta";

const JOB = {
  en: "Computer Enginner",
  ptbr: "Engenheiro de Computação",
};
const INTRODUCTION = {
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
const ICONS = {
  linkedin: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      height={"2em"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      height={"2em"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  email: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      height={"2em"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>contact@mtaciano.com</title>
      <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <Title>Miguel Taciano</Title>
      <main class="text-center mx-auto text-stone-700 p-4">
        <h1 class="font-serif text-8xl mt-16 mb-4">Miguel Taciano</h1>
        <h2 class="font-serif text-4xl mb-12">{JOB["en"]}</h2>
        <article class="text-lg text-justify max-w-xl mx-auto leading-relaxed">
          {INTRODUCTION["en"]}
        </article>
      </main>
      <footer class="text-sm border-t border-t-stone-400 text-center mx-auto max-w-md text-stone-400 pt-4 pb-2 mt-16">
        <p class="inline-block text-stone-500 mx-auto mb-1 border-b border-dotted border-stone-500 hover:border-solid hover:border-b-stone-700 hover:text-stone-700">
          <a href={"/mtaciano.ssh.pub"} download>
            <abbr
              class="no-underline"
              title="SHA256:CcdAWEMdTf7LzNt9kWB7SGQHFs0K1kF8ldA3NdbaSJk"
            >
              CcdAWE...dbaSJk
            </abbr>{" "}
            (SSH)
          </a>
        </p>
        <br />
        <p class="inline-block text-stone-500 mx-auto mb-1 border-b border-dotted border-stone-500 hover:border-solid hover:border-b-stone-700 hover:text-stone-700">
          <a href={"/mtaciano.gpg.asc"} download>
            <abbr
              class="no-underline"
              title="8313A90354AA2D6139FAE531F059B8F3B9AE19D4"
            >
              8313A9...AE19D4
            </abbr>{" "}
            (GPG)
          </a>
        </p>
        <div class="mt-2 flex flex-row justify-center">
          <a
            class="mx-2"
            href="https://www.linkedin.com/in/mtaciano"
            target="_blank"
          >
            {ICONS["linkedin"]}
          </a>
          <a
            class="mx-2"
            href="https://www.github.com/mtaciano"
            target="_blank"
          >
            {ICONS["github"]}
          </a>
          <a class="mx-2" href="mailto:contact@mtaciano.com" target="_blank">
            {ICONS["email"]}
          </a>
        </div>
        <p class="pt-2">
          Icons by{" "}
          <a
            class="inline-block text-stone-500 mx-auto border-b border-dotted border-stone-500 hover:border-solid hover:border-b-stone-700 hover:text-stone-700"
            href="https://simpleicons.org"
            target="_blank"
          >
            Simple Icons
          </a>
        </p>
      </footer>
    </>
  );
}
