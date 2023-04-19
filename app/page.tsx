"use client";

import { Poppins } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import bhojan1 from "../assets/images/bhojan1.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import bhojan2 from "../assets/images/bhojan2.jpg";
import outdoor1 from "../assets/images/outdoor1.jpg";
import verifiedIcon from "../assets/svg/verified.svg";
import star from "../assets/svg/star.svg";
import halfStar from "../assets/svg/half-star.svg";
import call from "../assets/svg/call.svg";
import location from "../assets/svg/location.svg";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
const caraosulImages = [room1, room2, outdoor1, bhojan1, bhojan2];
export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <div className={`container h-full w-full ${poppins.className}`}>
        <div className="h-[50vh] sm:h-[70vh] w-full bg-gray-400 relative">
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
            withIndicators
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
                  className="w-full h-full relative bg-green-300 flex justify-center items-center bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${element.src})`,
                  }}
                ></Carousel.Slide>
              );
            })}
          </Carousel>
          <div className="w-full flex justify-center items-center relative">
            <div className="bg-white shadow-2xl rounded-lg sm:rounded-xl w-[90%] lg:w-[80%] xl:w-[60%] h-max -mt-8 absolute -top-10 sm:top-auto flex flex-col justify-start px-4 lg:px-10 py-2">
              <p className="text-blue-500 flex items-center text-xs mt-4">
                <Image
                  src={verifiedIcon}
                  width={19}
                  height={19}
                  alt={"verified-icon"}
                />
                <span> &nbsp; Verified</span>
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
                Shree Mahuva Tapagach Jain Bhojanshala
              </p>
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center text-sm">
                <span className=" mt-2">
                  Bhojanshala In Mahuva &nbsp; &nbsp;
                </span>
                <div className="flex justify-center items-center">
                  {" "}
                  <span className="text-green-700 font-medium mt-2">
                    Open Now
                  </span>{" "}
                  <span className="mt-2">&nbsp; &nbsp; 4.6</span>
                  <div className="flex justify-center items-center">
                    <Image
                      src={star}
                      width={20}
                      height={20}
                      alt="star"
                      className="ml-2"
                    />
                    <Image src={star} width={20} height={20} alt="star" />
                    <Image src={star} width={20} height={20} alt="star" />
                    <Image src={star} width={20} height={20} alt="star" />
                    <Image src={halfStar} width={20} height={20} alt="star" />
                  </div>
                  <span className=" sm:mt-2"> &nbsp; (137)</span>
                </div>
              </div>
              <div className="w-full flex justify-between items-center py-2 my-4">
                <a
                  className="px-5 py-3 rounded-full text-blue-700 border-2 border-blue-700 text-xs sm:text-sm font-medium flex justify-start items-center"
                  href="tel:+917574993699"
                  target="_blank"
                >
                  <Image
                    src={call}
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-2"
                  />{" "}
                  Call 02844 222 259
                </a>
                <a
                  className="px-6 py-3 rounded-full text-blue-700 border-2 border-blue-700 text-xs sm:text-sm font-medium flex justify-start items-center"
                  href="https://goo.gl/maps/Xt7r1SfPsJRhZevE6"
                  target="_blank"
                >
                  <Image
                    src={location}
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-2"
                  />{" "}
                  See on Map
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs w-full max-w-full text-gray-500 flex justify-center items-center absolute bottom-10 lg:bottom-5 px-6">
          <div className="flex flex-col justify-center items-center bg-neutral-200 px-4 py-3 rounded-lg text-neutral-700">
            <ul>
              <li>Jai Jinendra</li>
              <li>This website is currently under development</li>
              <li>We will launch the complete website soon</li>
              <li>
                Please also let us know your thoughts and reviews on Google Maps
                by then
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
