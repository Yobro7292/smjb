"use client";

import { Divider, Group, SimpleGrid, createStyles } from "@mantine/core";
import { stats } from '../../lib/data/states'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#F4F0EC",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2 )`,
    borderRadius: "18px",
    marginBottom: `calc(${theme.spacing.xl} * 3)`,
    marginTop: `calc(${theme.spacing.xl} * 2)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Counter = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={7}
        verticalSpacing={0}
        className="hidden sm:grid justify-items-center align-middle items-center justify-center"
      >
        {stats.map((item)=>(
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
      <SimpleGrid
        cols={2}
        verticalSpacing="lg"
        className="grid sm:hidden justify-items-center align-middle items-center justify-between w-full"
      >
        {stats.map((item)=>(
          <>
        <Group>
          <div className="flex flex-col items-center">
            {" "}
            <p className="text-xl sm:text-4xl font-bold text-textPrimary">
              {item.value}
            </p>
            <p className="text-sm sm:text-sm">{item.title}</p>
          </div>
        </Group>
        </>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Counter;
