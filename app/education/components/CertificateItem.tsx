import { useSearchParams } from "@remix-run/react";
import { certificateType } from "../types";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "~/root";

export default function CertificateItem({ certificate }: { certificate: any }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <button
      className={`flex flex-col justify-center items-center p-4 w-40 flex-shrink-0  gap-2 ${
        darkMode
          ? " bg-selectedColor hover:bg-selectedColor/[0.4] "
          : " bg-gray-200 hover:bg-gray-200/[0.4] "
      }  rounded-md`}
      onClick={() => {
        setSearchParams(`${certificate.link}=true`, {
          preventScrollReset: true,
          replace: true,
        });
      }}
    >
      <img src="/app/svg/medal-violet.svg" width={24}></img>
      <p className=" text-sm ">{certificate.title}</p>
      <p
        className={` text-xs ${darkMode ? "text-slate-300 " : " text-black "} `}
      >
        {certificate.time}
      </p>
    </button>
  );
}
