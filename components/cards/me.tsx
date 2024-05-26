import { Card } from "../ui/card";
import Image from "next/image";
import MyImage from "@/public/assets/images/me/me1.jpg";
import { cn } from "@/lib/utils";

export const MeCard = () => {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[250px] sm:h-[350px] overflow-hidden">
        {/* Background image */}
        <Image
          src={MyImage}
          alt="Carlos Curtinhas"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />

        {/* Tags */}
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello everyone!!"
            className=" rounded-tr-2xl  rounded-bl-2xl"
          />
          <Tag
            text="I`m Carlos Curtinhas"
            className="rounded-tr-2xl  rounded-bl-2xl"
          />
          <Tag
            text="Full stack developer"
            className="  rounded-tr-2xl  rounded-bl-2xl"
          />
        </div>
      </div>
    </Card>
  );
};

const Tag = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};
