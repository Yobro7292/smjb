import {
  Box,
  Text,
  Modal,
  Grid,
  Button,
  Tabs,
  Flex,
  Input,
} from "@mantine/core";
import ChatIcon from "../../assets/svg/ChatIcon.svg";
import ChatIconColor from "../../assets/svg/ChatIconColor.svg";
import CloseIcon from "../../assets/svg/CloseIcon.svg";
import PreviousReportIcon from "../../assets/svg/PreviousReportIcon.svg";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg";
import ResultsIcon from "../../assets/svg/ResultsIcon.svg";
import { useDisclosure } from "@mantine/hooks";
import "./style.scss";
import { useState } from "react";
import Image from "next/image";

const ChatButton = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeTab, setActiveTab] = useState<string | null>("chat");

  return (
    <>
      <Box sx={{ position: "fixed", bottom: 40, right: 40, zIndex: 20 }} p={0}>
        <Box
          sx={{
            backgroundColor: "#3F3F3F",
            borderRadius: 999,
            display: opened ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={open}
          w={50}
          h={50}
        >
          {" "}
          <span>
            {" "}
            <Image src={ChatIcon} height={17} width={17} alt={'ggg'} />
            {/* <ChatIcon />{" "} */}
          </span>{" "}
        </Box>
      </Box>
      <Modal
        opened={opened}
        onClose={close}
        title=""
        centered={true}
        overlayProps={{
          opacity: 0.4
        }}
        withCloseButton={false}
        size={"xl"}
        sx={{ borderRadius: 0, backgroundColor: "#222233" }}
        mih={"75vh"}
        className="modal-main-body"
        p={0}
      >
        <Grid align="flex-start" className="modal-main-body">
          <Grid.Col span={12}>
            <Box sx={{ cursor: "pointer" }} onClick={close}>
              {/* <CloseIcon /> */}
            <Image src={CloseIcon} height={12} width={12} alt={'ggg'} />
            </Box>
          </Grid.Col>
          <Grid.Col span={12} px={20}>
            {/* for top title and buttons  */}
            <Grid align="center">
              <Grid.Col span={4}>
                <Text color="#fff" ff={"Montserrat"} fz={"12px"} tt={"uppercase"}>penetration test</Text>
              </Grid.Col>
              <Grid.Col
                span={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%"
                }}>
                <Button
                  onClick={open}
                  sx={{
                    background: "transparent",
                    color: "#87FBFC",
                    fontSize: "12px",
                    padding: "9px 20px",
                    fontWeight: 500
                  }}
            leftIcon={<Image src={PreviousReportIcon} height={17} width={17} alt={'ggg'} />}
                >
                  Previous Reports
                </Button>
                <Button
                  onClick={open}
                  sx={{
                    background: "#87FBFC !important",
                    boxShadow: "0px 4px 14px rgba(135, 251, 252, 0.2)",
                    borderRadius: "4px",
                    color: "#212333",
                    fontSize: "12px",
                    padding: "9px 20px",
                    fontWeight: 500
                  }}
                  leftIcon={<Image src={DownloadIcon} height={17} width={17} alt={'ggg'} />}
                >
                  Compare reports
                </Button>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          {/* tabs  */}
          <Grid.Col span={12}>
            {/* <TabsDetail tabHeading={chatTabHeadings} tabDetail={chatTabBody} /> */}

            <Tabs
              color="#53b9ea"
              value={activeTab}
              onTabChange={setActiveTab}
              sx={{
                backgroundColor: "#222233",
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="result" icon={<Image src={ResultsIcon} height={17} width={17} alt={'ggg'} />}>
                  <Text
                    sx={{
                      color:
                        activeTab === "result"
                          ? "#fff"
                          : "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Results
                  </Text>
                </Tabs.Tab>
                <Tabs.Tab value="chat" icon={<Image src={ChatIcon} height={17} width={17} alt={'ggg'} />}>
                  <Text color="#fff">Chat</Text>
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="result" pt="xs">
                <Box className="tab-panel">
                  <Text tt={"uppercase"} size={"sm"}>
                    Results
                  </Text>
                </Box>
              </Tabs.Panel>

              <Tabs.Panel value="chat" pt="xs">
                <Box className="tab-panel">
                  <Text tt={"uppercase"} size={"sm"}>
                    Welcome to the chat
                  </Text>
                  <Text size={"xs"} color="rgba(255, 255, 255, 0.7)">
                    Ask me anything, I’ll help you get a better understanding of
                    the results and to improve your model
                  </Text>
                </Box>
                <Flex
                  gap={"sm"}
                  justify="center"
                  align="center"
                  className="bottom-buttons"
                >
                  <Button variant="outline">
                    {" "}
                    What is my model&apos;s weekspot?{" "}
                  </Button>
                  <Button variant="outline">
                    {" "}
                    How can I improve my model?{" "}
                  </Button>
                  <Button variant="outline">
                    {" "}
                    Show me the confusion matrix{" "}
                  </Button>
                </Flex>
                <Flex
                  w={"100%"}
                  justify="center"
                  align="center"
                  className="chat-input-holder"
                >
                  <Input
                    className="chat-input-box"
                    icon={<Image src={ChatIconColor.src} height={17} width={17} alt={'ggg'} />}
                    variant="filled"
                    placeholder="Ask me anything..."
                  />
                </Flex>
              </Tabs.Panel>
            </Tabs>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
};

export default ChatButton;
