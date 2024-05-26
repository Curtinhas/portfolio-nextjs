import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "./card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { galleryImages } from "@/data";

export const Gallery = () => {
  return (
    <Card
      className="md:h-full bg-primary-background"
      title="Occupational Pursuits"
    >
      <div className="h-[350px] sm:h-[450px] w-full bg-primary-background">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper rounded-2xl"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.img}
                alt=""
                className="object-cover w-full object-left-top"
                title="My occupation"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
