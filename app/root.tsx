import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  redirect,
  useLoaderData,
  useLocation,
  useSearchParams,
} from "@remix-run/react";
import type {
  ActionFunctionArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import "~/styles/style.css";
import Menu from "./menu/Menu";
import { useEffect, useState } from "react";
import CertificateModal from "./education/components/CertificateModal";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import MoonSvg from "./svg/MoonSvg";
import SunSvg from "./svg/SunSvg";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio of front-end developer Tatyana Zaitseva" },
    { name: "description", content: "Java Script Developer for your projects" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const headersLang = request?.headers?.get("accept-language");
  const browserLang = headersLang?.split("-")?.[0] ?? "";
  const cookieHeader = request.headers.get("Cookie");
  const hasCookie = (await cookieHeader?.includes("lang")) || false;
  const cookieLangArr = cookieHeader
    ?.split(";")
    .filter((item) => item.includes("lang"));
  const cookieLang = cookieLangArr?.length
    ? cookieLangArr?.[0].split("=")?.[1]
    : "";

  return json({ browserLang, hasCookie, cookieLang } as {
    browserLang: string;
    hasCookie: boolean;
    cookieLang: string;
  });
};
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const formDataLang = String(`lang=` + formData.get("formDataLang"));
  const route = String(formData.get("currentRoute")) ?? "/";
  return redirect(`${route}`, {
    headers: {
      "Set-Cookie": await formDataLang,
    },
  });
}

export const darkModeAtom = atomWithStorage("darkMode", true);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeParamHTML = searchParams.get("html");
  const activeParamCSS = searchParams.get("css");

  const loaderData = useLoaderData() as {
    browserLang: string;
    hasCookie: boolean;
    cookieLang: string;
  };
  const [lang, setLang] = useState("");
  useEffect(() => {
    if (loaderData?.hasCookie) {
      setLang(loaderData?.cookieLang);
    } else {
      setLang(loaderData?.browserLang);
    }
    setLangSelector(false);
  }, [loaderData]);

  const [langSelector, setLangSelector] = useState(false);
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const currentRoute = useLocation()?.pathname;
  return (
    <div
      className={`${
        darkMode
          ? "bg-backgroundColor text-white "
          : "bg-white text-backgroundColor "
      } p-4 flex flex-col items-center  gap-8 w-full min-h-screen h-full`}
    >
      <div className="w-full relative flex justify-between max-w-[1200px]">
        <h1 className="text-2xl">About Me</h1>
        <div className="relative top-0 ">
          <button
            className="absolute top-2 right-12"
            onClick={() => setDarkMode(darkMode ? false : true)}
          >
            {darkMode ? (
              <div className="w-5 h-5">
                <MoonSvg clr={"#FFFFFF"} />
              </div>
            ) : (
              <div className="w-5 h-5">
                <SunSvg clr={"#111111"} />
              </div>
            )}
          </button>
        </div>
        <div
          className={`flex absolute w-12 top-1 right-0${
            darkMode ? " text-white " : " text-black "
          } flex-col justify-center items-center`}
        >
          <button onClick={() => setLangSelector(!langSelector)}>{lang}</button>
          {langSelector && (
            <Form method="post">
              <input
                className="hidden"
                type="text"
                name="formDataLang"
                value={lang == "ru" ? "en" : "ru"}
              />
              <input
                className="hidden"
                type="text"
                name="currentRoute"
                value={currentRoute}
              />
              <button
                type="submit"
                // onClick={() => setLangSelector(!langSelector)}
              >
                {lang == "ru" ? "en" : "ru"}
              </button>
            </Form>
          )}
        </div>
      </div>
      <div className="flex  max-w-[1200px] gap-8 flex-col md:flex-row w-full">
        <Menu />

        <Outlet />
      </div>
      {activeParamHTML && <CertificateModal type={0} />}
      {activeParamCSS && <CertificateModal type={1} />}
    </div>
  );
}
