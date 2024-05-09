import { useNavigate, useParams, useSearchParams } from "@remix-run/react";
import { certificateImages } from "../educationBd";

export default function CertificateModal({ type }: { type: number }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="absolute w-full h-full  bg-black/[0.6] object-center object-cover flex justify-center items-center  z-50 "
    >
      <img
        src={certificateImages?.[type]?.url}
        alt={"any"}
        className="relative lg:w-[60%] lg:h-[80%] object-cover cover-center"
      />
    </div>
  );
}
