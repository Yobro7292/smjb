"use client";
import {
  Container,
  SimpleGrid,
} from "@mantine/core";
import { ImageCard } from "../common/ImageCard";
import Divider from "../common/Divider";
const Service = () => {
  return (
    <Container size="xl" className="my-12">
      <div className="flex flex-col justify-center items-center">
      <Divider title={"Services"} varient={"light"} />
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { maxWidth: "lg", cols: 2 },
          ]}
          my={50}
          w={"100%"}
        >
          {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} /> */}
          <ImageCard
            link={""}
            image={
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title={"Rooms"}
            author={"AC/Non AC Rooms "}
            buttonTitle="Choose Room"
          />
          <ImageCard
            link={""}
            image={
              "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            }
            title={"Sattvic Jain Food"}
            author={"Navkarsi, Bhojan and Chauvihar"}
            buttonTitle="Create A Menu"
          />
          <ImageCard
            link={""}
            image={
              "https://img.freepik.com/free-photo/beautifully-decorated-venue-interior-wedding_181624-58530.jpg?w=1060&t=st=1684316948~exp=1684317548~hmac=ba84148182692d00bd71ae9454f14e83bf3498bc259ec13e3b797386bd137b82"
            }
            title={"Function Hall"}
            author={"Extra space for functions"}
            buttonTitle="Book A Hall"
          />

          {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} /> */}
        </SimpleGrid>
      </div>
    </Container>
  );
};
export default Service;
