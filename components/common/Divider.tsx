import { Title } from "@mantine/core";

interface DividerProps {
    title: string;
    description: string;
    varient: "dark" | "light"
}
const Divider = ({title, varient, description}:DividerProps) => {
  return (
<>
    <div className={`divider ${varient === "dark" ? 'divider-dark' : 'divider-light'}`}>
        <span></span>{" "}
        <Title order={2} px={"lg"} className={`${varient === "dark" ? 'text-textDarkPrimary' : 'text-textPrimary'}`}>
         {title}
        </Title>
        <span></span>
    </div>
    <p className="text-lg font-light text-gray-500 mt-2 mx-4 text-center">{description}</p>
</>
  )
}

export default Divider