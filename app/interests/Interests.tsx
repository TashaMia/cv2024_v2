import { useLoaderData } from "@remix-run/react";
import Tag from "./components/Tag";
import { interestsBdEn, interestsBdRu } from "./interests-db";

export default function Interests() {
  const loaderData = useLoaderData() as {
    browserLang: string;
    hasCookie: boolean;
    cookieLang: string;
  };

  const lang = loaderData?.hasCookie
    ? loaderData?.cookieLang
    : loaderData?.browserLang;
  return (
    <div className="flex flex-col pb-16 gap-4">
      <h2>{lang == "ru" ? "Интересы" : "Intersts"}</h2>
      <div className="flex flex-wrap gap-4">
        {lang == "ru"
          ? interestsBdRu.map((tag) => {
              return <Tag key={tag} tag={tag} />;
            })
          : interestsBdEn.map((tag) => {
              return <Tag key={tag} tag={tag} />;
            })}
      </div>
    </div>
  );
}
