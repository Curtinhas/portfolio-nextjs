import Image from "next/image";
import MyImage from "@/public/assets/images/me/me1.jpg";

export const Profile = () => {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      {/* photo */}

      <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-slate-300 to-zinc-800">
        <Image
          src={MyImage}
          alt="Carlos Curtinhas photo"
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
      </div>
      {/* name */}
      <div className="text-3xl font-medium">Carlos Curtinhas</div>
    </div>
  );
};
