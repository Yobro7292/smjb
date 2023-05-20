import { Title } from "@mantine/core";

interface DividerProps {
    title: string;
    varient: "dark" | "light"
}
const Divider = ({title, varient}:DividerProps) => {
  return (
<>
    <div className={`divider ${varient === "dark" ? 'divider-dark' : 'divider-light'}`}>
        <span></span>{" "}
        <Title order={2} px={"lg"} className={`${varient === "dark" ? 'text-textDarkPrimary' : 'text-textPrimary'}`}>
         {title}
        </Title>
        <span></span>
    </div>
    <hr className="h-[2px] w-[80%] sm:w-[60%] lg:w-[20%] my-2 bg-gray-200 border-0" />
    <p className="text-lg font-light text-gray-500">See what people thinks about</p>
</>
  )
}

export default Divider