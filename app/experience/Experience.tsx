import { useSearchParams } from "@remix-run/react";
import Work from "./components/Work";
import { workBd } from "./work-bd";

export default function ExperienceComonent() {
  return (
    <div className="flex w-full flex-col">
      {workBd.map((work) => {
        return <Work key={work.titleEn} work={work} />;
      })}{" "}
    </div>
  );
}
