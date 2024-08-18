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
              <div className="w-full flex flex-col justify-center items-center relative">
                <div className="bg-white shadow-2xl rounded-lg sm:rounded-xl w-[90%] lg:w-[80%] xl:w-[60%] h-[24rem] sm:h-[17rem] mt-0 absolute -top-20 sm:top-auto sm:mt-[106px] flex flex-col justify-start px-4 lg:px-10 py-2">
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
                      Bhojanshala In Mahuva &nbsp; &nbsp; • &nbsp; &nbsp;
                    </span>
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
                      <span className=" sm:mt-2"> &nbsp; (201)</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full mt-2">
                    <div className="w-full flex flex-col sm:flex-row justify-start  sm:justify-between items-start sm:items-center py-0 mt-2">
                      <a
                        className="px-5 py-3 w-full sm:w-auto my-1 sm:my-0 rounded-lg text-blue-700 border-2 border-blue-700 text-xs sm:text-sm font-medium flex justify-center items-center"
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
                        className="px-6 py-3 w-full sm:w-auto my-1 sm:my-0 rounded-lg text-green-600 border-2 border-green-600 text-xs sm:text-sm font-medium flex justify-center items-center"
                        href="https://api.whatsapp.com/send?phone=917574993699&text=Jai%20Jinendra%20%F0%9F%99%8F%0A"
                        target="_blank"
                      >
                        {/* href="https://wa.link/lo9fhp" */}
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
                        className="px-6 py-3 w-full sm:w-auto my-1 sm:my-0 rounded-lg text-blue-700 border-2 border-blue-700 text-xs sm:text-sm font-medium flex justify-center items-center"
                        href="https://goo.gl/maps/Xt7r1SfPsJRhZevE6"
                        target="_blank"
                      >
                        <Box className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                          <path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
                        </svg>
                        </Box>
                        Locate on Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* adding onfo  */}
              {/* <div className="flex flex-col justify-start items-center p-4 bg-white mb-5 mt-[22rem] sm:mt-[10rem]"> */}
                {/* <div
                  className={`text-xs w-full flex justify-center items-center px-4 bg-neutral-200 py-3 rounded-lg text-neutral-700 mb-3 text-center font-medium leading-5 mt-4`}
                >
                  This website is currently under development We will launch the
                  complete website soon.
                  <br />
                  <br />
                  જય જિનેન્દ્ર, આપણા જૈન લોકોને ઉત્તમ સુવિધા મળી રહે તથા અહી કોઈ
                  અગવડતા ન અનુભવાય તે માટે ડિજિટલ સ્વરૂપે આવવાનો અમારો આ નાનકડો
                  પ્રયાસ છે.
                  <br />
                  આપના અભિપ્રાયો અમને જરૂરથી જણાવશો જેથી કરી અમને પૂરતું
                  પ્રોત્સાહન મળી શકે સાથો સાથ આપ અમારી વેબસાઇટ પરથી શું અપેક્ષા
                  રાખો છો તે પણ જણાવશો.
                  <br />
                  Jay Jinendra, This is our small attempt to come in digital
                  form so that our Jain people get excellent facilities and do
                  not feel any discomfort here. Please tell us your opinions on
                  so that we can get enough encouragement and also tell us what
                  you expect from our website.
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </MantineProvider>
      </div>
      <Analytics />
    </>
  );
}
