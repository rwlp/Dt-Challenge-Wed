import { ICON_SIZE } from "@/utils/constants";
import { CubeIcon } from "@heroicons/react/16/solid";


export default function Loading() {

  return (
    <div className="w-full h-full flex items-center justify-center" >
      <CubeIcon
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="animate-spin text-blue-950" />
    </div>
  );
}