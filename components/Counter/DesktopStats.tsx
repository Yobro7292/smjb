import { Divider, Group, SimpleGrid } from "@mantine/core";
import { StatsProps } from "./Index";

const DesktopStats = ({ stats }: StatsProps) => {
  return (
    <SimpleGrid
      cols={7}
      verticalSpacing={0}
      className="hidden sm:grid justify-items-center align-middle items-center justify-center"
    >
      {stats.map((item, i) => (
        <>
          <Group>
            <div className="flex flex-col items-center">
              {" "}
              <p className="text-lg sm:text-4xl font-bold text-textPrimary">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm">{item.title}</p>
            </div>
          </Group>
          <Divider size="sm" orientation="vertical" color="#d6bf9f" />
          </>
      ))}
    </SimpleGrid>
  );
};

export default DesktopStats;
