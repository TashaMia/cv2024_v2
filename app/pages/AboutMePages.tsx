import Interests from "~/interests/Interests";
import Skills from "~/skills/Skills";

export default function AboutMePages() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Skills />
      <Interests />
    </div>
  );
}
