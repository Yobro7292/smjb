import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
type Src = string | null;
const useProgressiveImage = (src: Src) => {
  const [sourceLoaded, setSourceLoaded] = useState<any>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src || "";
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

const Component = ({
  source,
  placeholder,
}: {
  source: string;
  placeholder: string;
}) => {
  const loaded = useProgressiveImage(source);

  return (
    <div
      className="w-full h-full relative bg-gray-300 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${loaded || placeholder})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};
export default Component;
