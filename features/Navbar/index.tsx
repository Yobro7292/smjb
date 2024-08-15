"use client";
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  rem,
  Drawer,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "@/assets/svg/logo.svg";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import NavDrawer from "@/app/_components/NavDrawer/Index";
import { ReactNode } from "react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    backgroundColor: "white",
    padding: "10px 0px",
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    icon?: ReactNode;
    links?: { link: string; label: string;  icon?: ReactNode; }[];
  }[];
}

const Navbar = ({ links }: HeaderSearchProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} href={item.link}>
      <Menu.Item>{item.label}</Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <BiChevronDown />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={56}
      mb={50}
      style={{ background: "transparent", paddingTop: "25px" }}
      withBorder={false}
    >
      <div className={`${classes.inner} bg-transparent`}>
        <Link href={"/"}> 
        <Image
          src={Logo.src}
          height={100}
          width={100}
          alt="logo-icon"
          className="py-4"
        />
        </Link>

        <Group spacing={5} className={classes.links} position="right">
          {items}
        </Group>
 
        {/* <Box className="w-full flex" style={{ justifyContent: "end" }}>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Drawer
            opened={opened}
            onClose={toggle}
            title="Welcome to SMJB"
            overlayProps={{ opacity: 0.5, blur: 4 }}
            size={"sm"}
            position="right"
          >
            <NavDrawer links={links} />
          </Drawer>
        </Box> */}
      </div>
    </Header>
  );
};
export default Navbar;
