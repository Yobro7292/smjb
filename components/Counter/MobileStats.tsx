import { Group, SimpleGrid } from "@mantine/core";
import React from "react";
import { StatsProps } from "./Index";

const MobileStats = ({ stats }: StatsProps) => {
  return (
    <SimpleGrid
      cols={2}
      verticalSpacing="lg"
      className="grid sm:hidden justify-items-center align-middle items-center justify-between w-full"
    >
      {stats.map((item, i) => (
        <div key={i}>
          <Group key={i}>
            <div className="flex flex-col items-center">
              {" "}
              <p className="text-xl sm:text-4xl font-bold text-textPrimary">
                {item.value}
              </p>
              <p className="text-sm sm:text-sm">{item.title}</p>
            </div>
          </Group>
        </div>
      ))}
    </SimpleGrid>
  );
};

export default MobileStats;
