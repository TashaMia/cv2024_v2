import { useAtom } from "jotai";
import { skillsBdType } from "../types";
import { darkModeAtom } from "~/root";

export default function SkillComponent({ skill }: { skill: skillsBdType }) {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p>{skill.title}</p>
        <p>{skill.percent}%</p>
      </div>
      <div
        className={`${
          darkMode ? " bg-slate-200 " : "bg-white "
        } h-2 flex  rounded-md w-full`}
      >
        <div
          className={` h-full rounded-l-md  flex-shrink-0 `}
          style={{
            width: `${skill.percent}%`,
            backgroundColor: `${skill.color}`,
          }}
        ></div>
      </div>
    </div>
  );
}
