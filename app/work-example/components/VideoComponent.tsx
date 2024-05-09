import { useLoaderData } from "@remix-run/react";
import { videoType } from "../videoTypes";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "~/root";

export default function VideoComponent({
  video,
  index,
}: {
  video: videoType;
  index: number;
}) {
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
      className={` p-4 ${
        darkMode
          ? " bg-selectedColor  text-stone-300  "
          : " bg-gray-200 text-black "
      }rounded-lg`}
    >
      <h2 className="mb-4">
        {" "}
        {lang == "ru" ? "Проект #" : "Project #"}
        {index + 1}
      </h2>
      {/* <video className=" rounded-lg" loop autoPlay muted>
        <source src={video.video} type="video/mp4"></source>
      </video> */}
      <iframe
        src={video.video}
        className=" object-cover w-[100%] lg:w-[800px] lg:h-[420px] rounded-lg"
        allow="autoplay"
      ></iframe>
      <div className="flex flex-col gap-2 py-2 text-sm ">
        <div className="flex pt-4 ">
          <p className="w-[50%] flex-shrink-0">
            {lang == "ru" ? "Ссылка" : "Link:"}{" "}
          </p>
          <a href={`${video.link}`} target="_blank">
            {video.link}
          </a>
        </div>
        <div className="flex ">
          <p className="w-[50%]"> {lang == "ru" ? "Год" : "Year:"} </p>
          <p className="w-[50%]">{video.year}</p>
        </div>
        <div className="flex">
          <p className="w-[50%] flex-shrink-0">
            {lang == "ru" ? "Стек технологий:" : "Technology:"}{" "}
          </p>
          <p>{video.tech}</p>
        </div>
      </div>
    </div>
  );
}
