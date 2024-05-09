import Tag from "~/interests/components/Tag";
import { workBdType } from "../types";
import { useLoaderData } from "@remix-run/react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "~/root";

export default function AllInfoAboutWork({ work }: { work: workBdType }) {
  const loaderData = useLoaderData() as {
    browserLang: string;
    hasCookie: boolean;
    cookieLang: string;
  };

  const lang = loaderData?.hasCookie
    ? loaderData?.cookieLang
    : loaderData?.browserLang;

  const darkMode = useAtomValue(darkModeAtom);

  return (
    <div
      className={`flex mt-8 ${
        darkMode ? " text-stone-300" : "text-black"
      } text-sm flex-col gap-4`}
    >
      <div className="flex gap-4">
        <p className="w-[45%]  flex-shrink-0">
          {lang == "ru" ? "Компания:" : "Company:"}
        </p>
        <p>{work.company}</p>
      </div>
      <div className="flex gap-4">
        <p className="w-[45%]  flex-shrink-0">
          {lang == "ru" ? "Должность:" : "Job title:"}
        </p>
        <p>{lang == "ru" ? work.titleRu : work.titleEn}</p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="w-[45%] flex-shrink-0">
          {lang == "ru" ? "Используемые технологии:" : "Technologies used:"}
        </p>
        <div className="flex gap-4 flex-wrap">
          {work.technologiesUsed.map((tech) => {
            return (
              <div
                key={tech}
                className={`px-2 py-1 ${
                  darkMode ? "  bg-[#c6c4c720] " : " bg-gray-300 "
                }rounded-md`}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="w-[45%]  flex-shrink-0">
          {lang == "ru" ? "Вклад в работу:" : "Contribution to work:"}
        </p>
        <p className=" leading-6">
          {lang == "ru" ? work.contributionRu : work.contributionEn}
        </p>
      </div>
    </div>
  );
}
