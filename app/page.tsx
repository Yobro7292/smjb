"use client";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { Box, MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";
import { useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import bhojan1 from "../assets/images/bhojan1.webp";
import room1 from "../assets/images/room1.webp";
import room2 from "../assets/images/room2.webp";
import room3 from "../assets/images/room3.webp";
import bhojan2 from "../assets/images/bhojan2.webp";
import outdoor1 from "../assets/images/outdoor1.webp";
import outdoor2 from "../assets/images/outdoor2.webp";
import outdoor3 from "../assets/images/outdoor3.webp";
import arial1 from "../assets/images/arial1.webp";
import hall1 from "../assets/images/hall1.webp";
import ground_1 from "../assets/images/ground_1.webp";
import ground_2 from "../assets/images/ground_2.webp";
import ground_hall1 from "../assets/images/ground_hall1.webp";
import ground_hall2 from "../assets/images/ground_hall2.webp";
import ground_hall3 from "../assets/images/ground_hall3.webp";
import ground_hall4 from "../assets/images/ground_hall4.webp";
import inner_hall1 from "../assets/images/inner_hall1.webp";
import inner_hall2 from "../assets/images/inner_hall2.webp";
import left_ground_hall1 from "../assets/images/left_ground_hall1.webp";

import verifiedIcon from "../assets/svg/verified.svg";
import star from "../assets/svg/star.svg";
import halfStar from "../assets/svg/half-star.svg";
import call from "../assets/svg/call.svg";
import location from "../assets/svg/location.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import downArrow from "../assets/svg/downArrow.svg";
import Component from "@/lib/LoadedHook";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const caraosulImages = [
  room1,
  room2,
  room3,
  outdoor1,
  ground_hall1,
  ground_hall2,
  left_ground_hall1,
  outdoor3,
  bhojan1,
  inner_hall1,
  inner_hall2,
  bhojan2,
  ground_1,
  ground_2,
  ground_hall3,
  ground_hall4,
  hall1,
  arial1,
];
export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [dis, setDis] = useState<boolean>(false);
  return (
    <>
<div
  className={`min-h-screen w-full flex flex-col justify-start items-center ${poppins.className}`}
>
  <Notifications position="top-center" zIndex={2077} />
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: "light",
    }}
  >
    <div className={`container flex flex-col h-screen w-full relative justify-center items-center`}>
      <div className="h-full w-full bg-gray-400 relative pointer-events-none">
        <Carousel
          align={"start"}
          loop
          draggable={false}
          plugins={[autoplay.current]}
          className="h-full w-full"
          slideSize="100%"
          height={"100%"}
          slideGap="xs"
          withControls={false}
          withIndicators={false}
          styles={{
            indicator: {
              width: "2.6rem",
              height: "0.5rem",
              transition: "width 250ms ease",
              "&[data-active]": {
                width: "3.6rem",
                backgroundColor: "white",
              },
              "&[aria-hidden]": {
                backgroundColor: "white",
              },
            },
          }}
        >
          {caraosulImages.map((element, key) => {
            return (
              <Carousel.Slide
                key={key}
                className="w-full h-full relative bg-gray-300 flex justify-center items-center bg-cover bg-center"
              >
                <Component source={element.src} placeholder={""} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
      <div className="isolate backdrop-blur-sm w-[90%] py-6 rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 outline outline-white absolute flex flex-col justify-start px-4 gap-2">
        <p className="text-2xl text-center text-white opacity-90 sm:text-xl md:text-2xl font-semibold -inset-0 mb-auto">
          Shree Mahuva Tapagach Jain Bhojanshala
        </p>
        <div className="flex flex-col mx-auto sm:flex-row justify-start items-start sm:items-center text-sm mt-4">
          <div className="flex justify-center items-center">
                {" "}
                <span className="text-green-300 font-bold text-md mt-0">
                  Open Now &nbsp;  •
                </span>{" "}
                <span className="mt-2 text-md text-white">&nbsp; &nbsp; 4.7 </span>
                <div className="flex justify-center items-center">
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt="star"
                    className="ml-2"
                    loading="lazy"
                  />
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt="star"
                    loading="lazy"
                  />
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt="star"
                    loading="lazy"
                  />
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt="star"
                    loading="lazy"
                  />
                  <Image
                    src={halfStar}
                    width={20}
                    height={20}
                    alt="star-half"
                    loading="lazy"
                  />
                </div>
                <span className="text-md text-white sm:mt-2"> &nbsp; (201)</span>
          </div>              
        </div>
        <div className="flex flex-col justify-center items-center w-full -mb-6 mt-0">
          <div className="w-full flex flex-col sm:flex-row justify-start  sm:justify-between items-start sm:items-center py-2 my-4 gap-1">
            <a
              className="px-5 py-3 w-[90%] mx-auto sm:w-auto my-1 sm:my-0 rounded-lg text-blue-200 border-2 border-blue-200 bg-black/20 text-md sm:text-sm font-normal flex justify-center items-center"
              href="tel:02844222259"
              target="_blank"
            >
              <Image
                src={call}
                width={20}
                height={20}
                alt="call"
                className="mr-2"
                loading="lazy"
              />{" "}
              Call 02844 222 259
            </a>
            <a
              className="px-6 py-3 w-[90%] mx-auto sm:w-auto my-1 sm:my-0 rounded-lg text-green-200 border-2 border-green-200 bg-black/20 text-md sm:text-sm font-normal flex justify-center items-center"
              href="https://api.whatsapp.com/send?phone=917574993699&text=Jai%20Jinendra%20%F0%9F%99%8F%0A"
              target="_blank"
            >
              <Image
                src={whatsapp}
                width={20}
                height={20}
                alt="whatsapp"
                className="mr-2"
                loading="lazy"
              />{" "}
              Chat on Whatsapp
            </a>
            <a
              className="px-6 py-3 w-[90%] mx-auto sm:w-auto my-1 sm:my-0 rounded-lg text-orange-200 border-2 border-orange-200 bg-black/20 text-md sm:text-sm font-normal flex justify-center items-center"
              href="https://goo.gl/maps/Xt7r1SfPsJRhZevE6"
              target="_blank"
            >
              <Image
                src={location}
                width={20}
                height={20}
                alt="location"
                className="mr-2"
                loading="lazy"
              />{" "}
              Locate on Map
            </a>
          </div>
        </div>
      </div>
    </div>
  </MantineProvider>
</div>
<Analytics />
</>
  );
}
