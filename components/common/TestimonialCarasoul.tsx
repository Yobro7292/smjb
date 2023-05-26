import { Carousel } from "@mantine/carousel";
import { testimonialData } from '../../lib/data/testimonial'
import { rem } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import RatingStars from "./RatingStars";


interface CardProps {
  image: string;
  title: string;
  category: string;
  ratingValue: number
}

function Card({ image, title, category, ratingValue }: CardProps) {
  return (
    <div
      className="flex justify-between flex-col w-full p-6 bg-white border border-gray-200 rounded-lg h-[13rem]"
    >
      <p className="font-normal text-gray-700">
        {title}
      </p>
      <div className="w-full flex flex-row flex-nowrap justify-start items-center mt-4">
        <Image
          className="w-10 h-10 rounded-full mr-4 "
          src={image}
          alt=""
          width={50}
          height={50}
        />
        <div className="font-medium w-full flex flex-col justify-start items-start">
        <RatingStars value={ratingValue} />
          <div>{category}</div>
          <div className="text-xs font-normal text-gray-500">Senior Officer</div>
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
      slideSize="33%"
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
