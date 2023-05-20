import { Carousel } from "@mantine/carousel";
import { testimonialData } from '../../lib/data/testimonial'
import { rem } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";


interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <div
      className="flex justify-between flex-col w-full p-6 bg-white border border-gray-200 rounded-lg h-[10rem]"
    >
      <p className="font-normal text-gray-700">
        {title}
      </p>
      <div className="w-full flex flex-row flex-nowrap justify-start items-center mt-4">
        <Image
          className="w-10 h-10 rounded-full mr-4 border-2 border-gray-600"
          src={image}
          alt=""
          width={40}
          height={40}
        />
        <div className="font-medium">
          <div>{category}</div>
          <div className="text-sm text-gray-500">Senior Officer</div>
        </div>
      </div>
    </div>
  );
}

const TestimonialCarasoul = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = testimonialData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="25%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(1) }]}
      slideGap="sm"
      align="center"
      withControls={false}
      plugins={[autoplay.current]}
      loop
      className="w-full mt-5"
    >
      {slides}
    </Carousel>
  );
};
export default TestimonialCarasoul;
