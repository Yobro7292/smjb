"use client";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";
import heroImg from "../../assets/images/hero.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #553e25 90%), url(${heroImg.src})`,
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    borderRadius: "18px",
    [theme.fn.smallerThan("sm")]: {
      backgroundImage: "none",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "start",
      textAlign: "left",
    },
  },

  title: {
    color: "#CDA274",
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.85,
    maxWidth: rem(375),
    fontSize: "15px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
    [theme.fn.smallerThan("sm")]: {
      color: theme.black,
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className="mt-6 mb-12 w-full bg-transparent">
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={`${classes.title}`}>
                A Sanctuary For The{" "}
                <Text
                  component="span"
                  inherit
                  variant="white"
                  className={`text-textPrimary md:text-white`}
                >
                  {" "}
                  Soul
                </Text>{" "}
              </Title>

              <Text
                className={`${classes.description}`}
                mt={38}
              >
                Welcome to Shree Mahuva Jain Bhojanshala A place where every
                guest is family
              </Text>

              <Button
                radius="md"
                size="md"
                rightIcon={<HiOutlineArrowNarrowRight />}
                className={`bg-[#eec9a2] text-[#6d4e2d] mt-8 text-sm font-semibold hover:bg-[#eec9a2] shadow-md`}
              >
                Explore Services{" "}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
