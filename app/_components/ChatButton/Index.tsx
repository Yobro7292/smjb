import {
  Box,
  Text,
  Modal,
  Grid,
  Button,
  Flex,
} from "@mantine/core";
import ChatIcon from "../../assets/svg/ChatIcon.svg";
import CloseIcon from "../../assets/svg/CloseIcon.svg";
import PreviousReportIcon from "../../assets/svg/PreviousReportIcon.svg";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg";
import { useDisclosure } from "@mantine/hooks";
import "./style.scss";
import Image from "next/image";
import TabsComponent from "./Tabs";

const ChatButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
            <Image src={ChatIcon} height={17} width={17} alt={"ggg"} />
            {/* <ChatIcon />{" "} */}
          </span>{" "}
        </Box>
      </Box>
      <Modal
        opened={opened}
        onClose={close}
        centered={true}
        overlayProps={{
          opacity: 0.4,
        }}
        withCloseButton={false}
        size={"xl"}
        className="modal-main-body"
        p={0}
      >
        {/* main container modal  */}
        <Flex
          direction={"column"}
          gap={0}
          align={"flex-start"}
          justify={"center"}
        >
          {/* close button  */}
          <Box
            sx={{
              width: "100%",
              padding: "12px 18px",
              margin: 0,
              cursor: "pointer"
            }}
            onClick={close}
          >
            <Image src={CloseIcon} width={12} height={12} alt={"close"} />
          </Box>

          {/* inner body  */}
          <Flex
            direction={"column"}
            align={"flex-start"}
            gap={0}
            sx={{
              padding: "0px 40px",
              width: "100%",
            }}
          >
            {/* title and buttons  */}
            <Grid sx={{ width: "100%" }} gutter={0} align="center">
              <Grid.Col span={4}>
                <Text color="#fff" fz={"12px"} tt={"uppercase"}>
                  penetration test
                </Text>
              </Grid.Col>

              {/* reports and download buttons  */}
              <Grid.Col span={8}>
                <Flex
                  direction={"row"}
                  wrap={"nowrap"}
                  align={"center"}
                  justify={"flex-end"}
                >
                  {/* Previous Button Button */}
                  <Button
                    onClick={open}
                    sx={{
                      background: "transparent",
                      color: "#87FBFC",
                      fontSize: "12px",
                      padding: "9px 20px",
                      fontWeight: 500,
                    }}
                    leftIcon={
                      <Image
                        src={PreviousReportIcon}
                        height={17}
                        width={17}
                        alt={"ggg"}
                      />
                    }
                  >
                    Previous Reports
                  </Button>

                  {/* Download Button Button */}
                  <Button
                    onClick={open}
                    sx={{
                      background: "#87FBFC !important",
                      boxShadow: "0px 4px 14px rgba(135, 251, 252, 0.2)",
                      borderRadius: "4px",
                      color: "#212333",
                      fontSize: "12px",
                      padding: "9px 20px",
                      fontWeight: 500,
                    }}
                    leftIcon={
                      <Image
                        src={DownloadIcon}
                        height={17}
                        width={17}
                        alt={"ggg"}
                      />
                    }
                  >
                    Download as PDF
                  </Button>
                </Flex>
              </Grid.Col>
            </Grid>
           {/* end of container of buttons  */}

           <TabsComponent />
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default ChatButton;
