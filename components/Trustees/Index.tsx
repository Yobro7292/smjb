"use client";
import { createStyles, Grid, SimpleGrid } from "@mantine/core";
import Divider from "../common/Divider";
import { ArticleCard } from "../common/ArticleCard";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#F4F0EC",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    borderRadius: "18px",
    marginBottom: `calc(${theme.spacing.xl} * 3)`,
    marginTop: `calc(${theme.spacing.xl} * 2)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
const Trustee = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Divider title={"Management"} varient={"dark"} />
      <div className="w-full flex justify-center items-center mt-12 mb-0 px-[20px]">
        <div className="w-[19rem]">
        <ArticleCard
          image={
            "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          title={"Lorem Ipsum"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          rating={"President"}
        />
        </div>
      </div>
      <SimpleGrid
        cols={4}
        spacing="md"
        breakpoints={[
          { maxWidth: "sm", cols: 1 },
          { maxWidth: "lg", cols: 2 },
        ]}
        my={40}
        px={20}
        w={"100%"}
        className="justify-items-center"
        verticalSpacing="xl"
      >
        <ArticleCard
        className="max-w-[19rem]"
          image={
            "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          title={"Lorem Ipsum"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          rating={"Trustee"}
        />
        <ArticleCard
        className="max-w-[19rem]"
          image={
            "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          title={"Lorem Ipsum"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          rating={"Trustee"}
        />
        <ArticleCard
        className="max-w-[19rem]"
          image={
            "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          title={"Lorem Ipsum"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          rating={"Trustee"}
        />
        <ArticleCard
        className="max-w-[19rem]"
          image={
            "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          title={"Lorem Ipsum"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          rating={"Trustee"}
        />
      </SimpleGrid>
      <div className="w-full flex justify-center items-center px-[20px]">
        <div className="w-[19rem]">
        <ArticleCard
       
          image={
            "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          title={"Lorem Ipsum"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          }
          rating={"Manager"}
        />
        </div>
      </div>
    </div>
  );
};

export default Trustee;
