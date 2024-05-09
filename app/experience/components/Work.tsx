import { useState } from "react";
import { workBdType } from "../types";
import AllInfoAboutWork from "./AllInfoAboutWork";
import { useLoaderData } from "@remix-run/react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "~/root";
import SuitCaseSvg from "~/svg/SuitCaseSvg";

export default function Work({ work }: { work: workBdType }) {
  const [openAllInso, setOpenAllInfo] = useState(false);
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
      className={`flex flex-col p-4 w-full  gap-2 ${
        darkMode ? "  bg-selectedColor " : " bg-gray-200"
      } rounded-md`}
    >
      <div className=" flex items-center justify-between">
        <div className="flex gap-6  items-center">
          <div className="w-12 h-12 flex justify-center items-center bg-workColor rounded-md">
            <SuitCaseSvg clr={"#FFFFFF"} />
          </div>
          <div className="flex flex-col">
            <p className=" text-sm mb-1">
              {lang == "ru" ? work.titleRu : work.titleEn}
            </p>

            <p
              className={` text-xs ${
                darkMode ? " text-slate-300 " : " text-black"
              }`}
            >
              {work.time}
            </p>
          </div>
        </div>
        <button
          className="hover:bg-[#c6c4c720] rounded-md"
          onClick={() => setOpenAllInfo(!openAllInso)}
        >
          <img src="/app/svg/caret-down.svg" width={30}></img>
        </button>
      </div>
      {openAllInso && <AllInfoAboutWork work={work} />}
    </div>
  );
}
