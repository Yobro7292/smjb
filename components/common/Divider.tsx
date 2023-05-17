import { Title } from "@mantine/core";

interface DividerProps {
    title: string;
    varient: "dark" | "light"
}
const Divider = ({title, varient}:DividerProps) => {
  return (
    <div className={`divider ${varient === "dark" ? 'divider-dark' : 'divider-light'}`}>
        <span></span>{" "}
        <Title order={1} px={"lg"} className={`${varient === "dark" ? 'text-textDarkPrimary' : 'text-textPrimary'}`}>
         {title}
        </Title>
        <span></span>
      </div>
  )
}

export default Divider