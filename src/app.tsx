import "./app.css";
import { AppContextProvider } from "~/appcontext";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <AppContextProvider>
            <Nav />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </AppContextProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
