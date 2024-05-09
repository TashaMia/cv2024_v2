import { LoaderFunction, json } from "@remix-run/node";
import EducationPages from "~/pages/EducationPages";
import { redirect } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";
import "~/styles/style.css";

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

  return redirect("/education", {
    headers: {
      "Set-Cookie": await formDataLang,
    },
  });
}

export default function Education() {
  return <EducationPages />;
}
