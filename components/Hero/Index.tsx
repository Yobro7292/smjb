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
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #553e25 80%), url(${heroImg.src})`,
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    borderRadius: "18px",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
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
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A Sanctuary For
              <br />
              The{" "}
              <Text
                component="span"
                inherit
                variant="white"
                className="text-white"
              >
                {" "}Soul
              </Text>{" "}
            </Title>

            <Text
              className={`${classes.description} ${poppins.className}`}
              mt={38}
            >
              Welcome to Shree Mahuva Jain Bhojanshala A place where every guest
              is family
            </Text>

            <Button
              radius="md"
              size="md"
              rightIcon={<HiOutlineArrowNarrowRight />}
              className={`bg-[#eec9a2] text-[#6d4e2d] mt-8 text-sm font-semibold hover:bg-[#eec9a2] ${poppins.className}`}
            >
              Book Your Room
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
