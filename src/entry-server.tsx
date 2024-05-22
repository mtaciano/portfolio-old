// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Miguel Taciano" />
          <meta name="color-scheme" content="only light" />
          <link
            rel="preload"
            href="/fonts/robotomono/roboto_mono.ttf"
            as="font"
            type="font/ttf"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/robotomono/roboto_mono_italic.ttf"
            as="font"
            type="font/ttf"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/dmserif/dmserif.ttf"
            as="font"
            type="font/ttf"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/dmserif/dmserif_italic.ttf"
            as="font"
            type="font/ttf"
            crossorigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
