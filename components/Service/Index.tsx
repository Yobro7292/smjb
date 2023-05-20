"use client";
import { SimpleGrid, createStyles } from "@mantine/core";
import { ServiceCard } from "../common/ServiceCards";
import Divider from "../common/Divider";
import { services } from "../../lib/data/services";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#FFF",
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
const Service = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className="flex flex-col justify-center items-center w-full">
        <Divider title={"Services"} varient={"light"} description="Our Premium Services in One Click" />
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { maxWidth: "lg", cols: 2 },
          ]}
          className="mt-6 w-full px-3 sm:px-4 lg:px-8"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              link={service.link}
              image={service.image}
              title={service.title}
              author={service.author}
              buttonTitle={service.buttonTitle}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};
export default Service;
