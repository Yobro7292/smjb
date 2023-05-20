"use client"
import Divider from "../common/Divider"
import TestimonialCarasoul from "../common/TestimonialCarasoul"
import { createStyles } from "@mantine/core";


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
const Testimonials = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
        <Divider title={"Testimonials"} varient={"light"} description="What Peoples Say About Us" />
        <TestimonialCarasoul />
    </div>
  )
}

export default Testimonials