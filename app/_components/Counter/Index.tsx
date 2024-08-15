"use client";

import { Divider, Group, SimpleGrid, createStyles } from "@mantine/core";
import { stats } from '../../../lib/data/states'
import DesktopStats from "./DesktopStats";
import MobileStats from "./MobileStats";

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


export interface StatsProps {
  stats: {
    title: string;
    value: string;
  }[];
}

const Counter = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <DesktopStats stats={stats} />
      <MobileStats stats={stats} />
    </div>
  );
};

export default Counter;
