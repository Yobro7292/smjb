"use client";
import { createStyles, SimpleGrid } from "@mantine/core";
import Divider from "../common/Divider";
import { ManagementCard } from "../common/ManagementCard";
import {managementPeoples} from '../../lib/data/managementPeoples'
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#F4F0EC",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: "18px",
    marginBottom: `calc(${theme.spacing.xl} * 3)`,
    marginTop: `calc(${theme.spacing.xl} * 2)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
const Management = () => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.root} my-12`}>
      <Divider title={"Management"} varient={"dark"} />
      <SimpleGrid cols={6} spacing="xs" breakpoints={[{ maxWidth: 'sm', cols: 2 }, { maxWidth: 'lg', cols: 3 }]} className="mt-6 w-full px-3 sm:px-4 lg:px-8">
        {managementPeoples.map((people, i)=>(
          <ManagementCard key={i} image={people.image} title={people.title} description={people.description} rating={people.rating} />
        ))}
      </SimpleGrid>

    </div>
  );
};

export default Management;
