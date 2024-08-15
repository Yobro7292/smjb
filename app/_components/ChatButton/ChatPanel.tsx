import { Box, Flex, Input, Text, Button } from "@mantine/core";
import ChatIconColor from '../../assets/svg/ChatIconColor.svg';
import Image from "next/image";
import { useState } from "react";

const ChatPanel = () => {
    const [res, setRes] = useState(false)
  return (
    <Flex
      gap={0}
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
      sx={{ width: "100%", height: "100%", alignItems: "stretch" }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={0}
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          color: "#fff",
          padding: "1rem 0rem",
        }}
      >
        <Text sx={{ fontSize: "12px", fontWeight: 500 }} tt={"uppercase"}>
          Welcome to the chat
        </Text>
        <Text
          sx={{
            fontSize: "10px",
            fontWeight: 400,
            maxWidth: "60%",
            color: "#b0b0b0",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          Ask me anything, I’ll help you get a better understanding of the
          results and to improve your model
        </Text>
      </Flex>
      <Box
        sx={{ width: "100%", backgroundColor: "transparent", flex: "1 1 auto" }}
      >
        {res ? ( <div className="chat-section">
          <div className="right-section">
            <div className="text-section" onClick={()=> setRes(false)}>
              Show me the weak spots of my model
            </div>
          </div>

          <div className="left-section">
            <div className="text-section">
              Lorem ipsum dolor sit amet consectetur. Augue maecenas lorem
              faucibus malesuada viverra leo eleifend purus duis. Tortor ac
              curabitur purus nibh euismod ut\n Sed cras turpis risus
              pellentesque euismod. Amet feugiat amet tempus ac nunc porttitor
              id euismod. Aliquam massa odio magna cursus.
            </div>
          </div>
        </div> ) : (
            <Flex direction={"row"} wrap={"nowrap"} justify={"space-between"} align={"center"} gap={"sm"}>
                <Button variant="outline" onClick={()=> setRes(true)} className="questionButton">What is my model’s weakspot?</Button>
                <Button variant="outline" onClick={()=> setRes(true)} className="questionButton">How can I improve my model?</Button>
                <Button variant="outline" onClick={()=> setRes(true)} className="questionButton">Show me the confusion matrix</Button>
            </Flex>
        )}
        
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          padding: "1rem 0rem",
        }}
      >
        <Input
          className="chat-input-box"
          icon={<Image src={ChatIconColor} height={14} width={14} alt={"ggg"} />}
          placeholder="Ask me anything..."
        />
      </Box>
    </Flex>
  );
};

export default ChatPanel;
