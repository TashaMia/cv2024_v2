import { useAtomValue } from "jotai";
import { educationBdType } from "../types";
import { darkModeAtom } from "~/root";
import MedalSvg from "~/svg/MedalSvg";

export default function EducationItem({
  education,
}: {
  education: educationBdType;
}) {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <div
      className={`flex flex-col p-4 w-full  gap-2 ${
        darkMode ? " bg-selectedColor " : " bg-gray-200 "
      } rounded-md`}
    >
      <div className=" flex items-center gap-4">
        <div className="w-12 h-12 flex justify-center flex-shrink-0 items-center bg-workColor rounded-md">
          <MedalSvg clr={"#FFFFFF"} />
        </div>
        <div className="flex  flex-col">
          <p className=" text-sm mb-2">{education.company}</p>

          <p
            className={` text-xs ${
              darkMode ? " text-slate-300 " : " text-black"
            }`}
          >
            {education.title}
          </p>
          <p
            className={`  text-xs  ${
              darkMode ? " text-slate-300 " : " text-black"
            }`}
          >
            {" "}
            {education.time}
          </p>
        </div>
      </div>
    </div>
  );
}
