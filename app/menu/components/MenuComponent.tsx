import { Link, useActionData, useLoaderData } from "@remix-run/react";
import { menuBdType } from "../types";
import { useAtom } from "jotai";
import { darkModeAtom } from "~/root";
import FolderSvg from "~/svg/FolderSvg";
import { ReactNode } from "react";

export default function MenuComponent({
  menuItem,
  selectedMenuItem,
  setSelectedMenuItem,
  svg,
}: {
  menuItem: menuBdType;
  svg: ReactNode;
  selectedMenuItem: number | undefined;
  setSelectedMenuItem: React.Dispatch<React.SetStateAction<number | undefined>>;
}) {
  const loaderData = useLoaderData() as {
    browserLang: string;
    hasCookie: boolean;
    cookieLang: string;
  };

  const language = loaderData?.hasCookie
    ? loaderData?.cookieLang
    : loaderData?.browserLang;

  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
    <Link
      to={menuItem.link}
      onClick={() => setSelectedMenuItem(menuItem.index)}
      className={`flex flex-col items-center justify-start  w-28   py-4 gap-2 rounded-lg flex-shrink-0 ${
        selectedMenuItem == menuItem.index &&
        `${darkMode ? " bg-selectedColor " : "  bg-gray-200 "}`
      }`}
    >
      {svg}
      {/* <img src={menuItem.svg} width={24}></img> */}
      <h2 className="text-sm">
        {language == "ru" ? menuItem.titleRu : menuItem.titleEn}
      </h2>
    </Link>
  );
}
