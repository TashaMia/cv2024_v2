import CertificateItem from "./components/CertificateItem";
import EducationItem from "./components/EducationItem";
import { certificateBd, educationBd } from "./educationBd";

export default function EducationComonent() {
  return (
    <div className="flex w-full gap-4 flex-col mb-12">
      {educationBd.map((education) => {
        return <EducationItem key={education.title} education={education} />;
      })}
      <div className=" flex mt-8 flex-wrap gap-4">
        {certificateBd.map((certificate) => {
          return (
            <CertificateItem
              key={certificate?.title}
              certificate={certificate}
            />
          );
        })}
      </div>
    </div>
  );
}
