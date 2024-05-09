import { useAtomValue } from "jotai";
import { darkModeAtom } from "~/root";

export default function Tag({ tag }: { tag: string }) {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <div
      className={`p-2 px-4 ${
        darkMode ? " bg-selectedColor " : " bg-gray-200 "
      }  rounded-3xl`}
    >
      <p>{tag}</p>
    </div>
  );
}
