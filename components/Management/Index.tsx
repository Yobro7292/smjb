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
const Management = () => {  const { classes } = useStyles();
  return (
    <div className={`${classes.root} my-12`}>
      <Divider title={"Management"} varient={"dark"} />
      <div className="sm:hidden w-full px-4 flex justify-center items-center mt-5">
        <a
          href="#"
          className="block w-full p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 rounded-[20px]"
        >
          <p className="mb-2 text-2xl tracking-tight font-semibold text-gray-900">
            Management group of 
            <br />
            <span className="text-lg text-gray-400">Shree Mahuva Jain Bhojanshala</span>
          </p>

          <div className="flex w-full my-6 -space-x-4">
            <img
              className="w-12 h-12 border-2 border-white rounded-full "
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
              style={{
                border: "3px solid white"
              }}
            />
            <img
              className="w-12 h-12 border-2 border-white rounded-full "
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt=""
              style={{
                border: "3px solid white"
              }}
            />
            <img
              className="w-12 h-12 border-2 border-white rounded-full "
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt=""
              style={{
                border: "3px solid white"
              }}
            />
            
<div className="flex items-center justify-center w-12 h-12 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full" >+2</div>
          </div>
        </a>
      </div>
      <div className="hidden sm:block w-full">
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
    </div>
  );
};

export default Management;
