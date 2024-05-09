import { useState } from "react";
import MenuComponent from "./components/MenuComponent";
import { menuBd } from "./menu-bd";
import { useHref, useLocation, useParams } from "@remix-run/react";
import FolderSvg from "~/svg/FolderSvg";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "~/root";
import UserSvg from "~/svg/UserSvg";
import SuitCaseSvg from "~/svg/SuitCaseSvg";
import MedalSvg from "~/svg/MedalSvg";

export default function Menu() {
  const selectionMenuItem = [
    { id: 1, title: "/about-me" },
    { id: 3, title: "/education" },
    { id: 2, title: "/experience" },
    { id: 4, title: "/work-examples" },
  ];
  const location = useLocation()?.pathname;
  const [selectedMenuItem, setSelectedMenuItem] = useState<number | undefined>(
    selectionMenuItem?.find((item) => {
      return item.title === location;
    })?.id
  );
  const darkMode = useAtomValue(darkModeAtom);

  const icons = [
    <UserSvg clr={darkMode ? "#FFFFFF" : "#1111111"} />,
    <SuitCaseSvg clr={darkMode ? "#FFFFFF" : "#1111111"} />,
    <MedalSvg clr={darkMode ? "#FFFFFF" : "#1111111"} />,
    <FolderSvg clr={darkMode ? "#FFFFFF" : "#1111111"} />,
  ];

  return (
    <div className="overflow-scroll md:flex-shrink-0   noScrollBar  w-[348px] md:w-auto ">
      <div className="justify-start  items-center gap-2 flex flex-row md:flex-col">
        {menuBd.map((menuItem, index) => {
          return (
            <MenuComponent
              key={menuItem.index}
              menuItem={menuItem}
              svg={icons[index]}
              selectedMenuItem={selectedMenuItem}
              setSelectedMenuItem={setSelectedMenuItem}
            />
          );
        })}
      </div>
    </div>
  );
}
