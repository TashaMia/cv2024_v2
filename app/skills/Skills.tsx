import { useLoaderData, useSearchParams } from "@remix-run/react";
import SkillComponent from "./components/SkillComponent";
import { skillsBd } from "./skills-bd";
import { useAtom } from "jotai";
import { darkModeAtom } from "~/root";

export default function Skills() {
  const loaderData = useLoaderData() as {
    browserLang: string;
    hasCookie: boolean;
    cookieLang: string;
  };

  const lang = loaderData?.hasCookie
    ? loaderData?.cookieLang
    : loaderData?.browserLang;
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <div
      className={`${
        darkMode ? "bg-selectedColor " : "bg-gray-200 "
      }  p-4 rounded-lg w-full  max-h-80 noScrollBar overflow-y-scroll flex flex-col gap-4`}
    >
      <h2>{lang == "ru" ? "Навыки" : "Skills"}</h2>
      <>
        {skillsBd.map((skill) => {
          return <SkillComponent key={skill.title} skill={skill} />;
        })}
      </>
    </div>
  );
}
