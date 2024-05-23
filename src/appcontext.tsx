import { dict as en_dict } from "../lang/en/en";
import {
  ParentComponent,
  Suspense,
  createContext,
  createEffect,
  createResource,
  startTransition,
  useContext,
} from "solid-js";
import * as router from "@solidjs/router";
import * as i18n from "@solid-primitives/i18n";
import * as storage from "@solid-primitives/storage";
import { createStore } from "solid-js/store";
import { Meta, Title } from "@solidjs/meta";

export type Locale = "en" | "pt";

type RawDictionary = typeof en_dict;

export type Dictionary = i18n.Flatten<RawDictionary>;

// Validate if other dictionaries have the same keys as the en dictionary.
// Some might be missing, but the shape should be the same
type DeepPartial<T> =
  T extends Record<string, unknown>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const raw_dict_map: Record<
  Locale,
  () => Promise<{ dict: DeepPartial<RawDictionary> }>
> = {
  en: () => null as any,
  pt: () => import("../lang/pt/pt"),
};

const en_flat_dict: Dictionary = i18n.flatten(en_dict);

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === "en") return en_flat_dict;

  const { dict } = await raw_dict_map[locale]();
  const flat_dict = i18n.flatten(dict) as RawDictionary;
  return { ...en_flat_dict, ...flat_dict };
}

interface Settings {
  locale: Locale;
}

const toLocale = (string: string): Locale | undefined =>
  string in raw_dict_map ? (string as Locale) : undefined;

function initialLocale(location: router.Location): Locale {
  let locale: Locale | undefined;

  locale = toLocale(location.query.locale);
  if (locale) return locale;

  locale = toLocale(navigator.language.slice(0, 2));
  if (locale) return locale;

  locale = toLocale(navigator.language.toLocaleLowerCase());
  if (locale) return locale;

  return "en";
}

function initialSettings(location: router.Location): Settings {
  return {
    locale: initialLocale(location),
  };
}

function deserializeSettings(
  value: string,
  location: router.Location,
): Settings {
  const parsed = JSON.parse(value) as unknown;
  if (!parsed || typeof parsed !== "object") return initialSettings(location);

  return {
    locale:
      ("locale" in parsed &&
        typeof parsed.locale === "string" &&
        toLocale(parsed.locale)) ||
      initialLocale(location),
  };
}

interface AppState {
  get locale(): Locale;
  setLocale(value: Locale): void;
  t: i18n.Translator<Dictionary>;
}

const AppContext = createContext<AppState>({} as AppState);
export const useAppState = () => useContext(AppContext);

export const AppContextProvider: ParentComponent = (props) => {
  const location = router.useLocation();

  const now = new Date();
  const cookieOptions: storage.CookieOptions = {
    expires: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
  };

  const [settings, set] = storage.makePersisted(
    createStore(initialSettings(location)),
    {
      storageOptions: cookieOptions,
      storage: storage.cookieStorage,
      deserialize: (value) => deserializeSettings(value, location),
    },
  );

  const locale = () => settings.locale;

  const [dict] = createResource(locale, fetchDictionary, {
    initialValue: en_flat_dict,
  });

  createEffect(() => {
    document.documentElement.lang = settings.locale;
  });

  const t = i18n.translator(dict, i18n.resolveTemplate);

  const state: AppState = {
    get locale() {
      return settings.locale;
    },
    setLocale(value) {
      void startTransition(() => {
        set("locale", value);
      });
    },
    t,
  };

  return (
    <Suspense>
      <AppContext.Provider value={state}>
        <Title>{t("global.title")}</Title>
        <Meta name="lang" content={locale()} />
        <div>{props.children}</div>
      </AppContext.Provider>
    </Suspense>
  );
};
