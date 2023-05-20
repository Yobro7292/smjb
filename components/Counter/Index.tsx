"use client";

import { Divider, Group, SimpleGrid } from "@mantine/core";


const Counter = () => {
  return (
    <div className="w-full my-12 bg-[#F4F0EC]">
      <SimpleGrid
        cols={7}
        spacing="lg"
        className="justify-items-center align-middle items-center justify-center py-10"
      >
        <div></div>
        <Group>
          <div className="flex flex-col items-center">
            {" "}
            <p className="text-4xl sm:text-4xl font-bold text-textPrimary">
              12
            </p>
            <p className="text-sm sm:text-sm">Years</p>
          </div>
        </Group>
        <Divider size="sm" orientation="vertical" color="#d6bf9f" />
        <Group>
          <div className="flex flex-col items-center">
            {" "}
            <p className="text-4xl sm:text-4xl font-bold text-textPrimary">
              16
            </p>
            <p className="text-sm sm:text-sm">Staff</p>
          </div>
        </Group>
        <Divider size="sm" orientation="vertical" color="#d6bf9f" />
        <Group>
          <div className="flex flex-col items-center">
            {" "}
            <p className="text-4xl sm:text-4xl font-bold text-textPrimary">
              152
            </p>
            <p className="text-sm sm:text-sm">Ratting</p>
          </div>
        </Group>
        <div></div>
      </SimpleGrid>
    </div>
  );
};

export default Counter;
