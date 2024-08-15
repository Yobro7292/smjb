import { Box, Button, Flex, Input, Tabs, Text } from "@mantine/core";
import Image from "next/image";
import ResultsIcon from "../../assets/svg/ResultsIcon.svg";
import { useState } from "react";
import ChatIcon from "../../assets/svg/ChatIcon.svg";
import ChatIconColor from "../../assets/svg/ChatIconColor.svg";
import ChatPanel from "./ChatPanel";

const tabHeading = [
  {
    id: 1,
    label: "Result",
    icon: <Image src={ResultsIcon} height={17} width={17} alt={"ggg"} />,
  },
  {
    id: 2,
    label: "Chat",
    icon: <Image src={ChatIcon} height={17} width={17} alt={"ggg"} />,
  },
];
const tabDetail = [
  {
    id: 1,
    details: [
      {
        header: "Result",
        total: 50,
      },
    ],
  },
  {
    id: 2,
    details: [
      {
        header: "Chat",
        total: 50,
      },
    ],
  },
];
const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState<string | null>("chat");
  return (
    <Tabs
      color="#53b9ea"
      defaultValue={activeTab}
      className="modal-tab"
      sx={{ backgroundColor: "#222233" }}
      onTabChange={setActiveTab}
    >
      <Tabs.List>
        <Tabs.Tab
          value={"result"}
          className="model"
          opacity={activeTab === "result" ? 1 : 0.4}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={ResultsIcon} height={12} width={12} alt={"ggg"} />
            <Text ml={7}>Result</Text>
            <Box
              sx={{
                display: activeTab === "result" ? "block" : "none",
                position: "absolute",
                bottom: "5px",
                left: "15px",
                width: "70%",
                backgroundColor: "#a4f8fa",
                boxShadow: "0 -3px 14px 1px #a4f8fa8a",
                height: "2px",
              }}
            ></Box>
          </Box>
        </Tabs.Tab>
        <Tabs.Tab
          value={"chat"}
          className="model"
          opacity={activeTab === "chat" ? 1 : 0.4}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={ChatIcon} height={12} width={12} alt={"ggg"} />
            <Text ml={7}>Chat</Text>
            <Box
              sx={{
                display: activeTab === "chat" ? "block" : "none",
                position: "absolute",
                bottom: "1px",
                left: "15px",
                width: "70%",
                backgroundColor: "#a4f8fa",
                boxShadow: "0 -3px 14px 1px #a4f8fa8a",
                height: "2px",
              }}
            ></Box>
          </Box>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value={"result"} pt="xs">
        <Box className="tab-panel">
          <Box className="modal-box" sx={{ backgroundColor: "#222233" }}>
            <Text className="img-txt">Result</Text>
          </Box>
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value={"chat"} pt="xs">
        <Box className="tab-panel">
          <Box className="modal-box" sx={{ backgroundColor: "#222233" }}>
            <ChatPanel />
          </Box>
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabsComponent;
