"use client"
import { createStyles, Header, Menu, Group, Center, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '@/assets/svg/logo.svg'
import { NextFont } from 'next/dist/compiled/@next/font';
import { BiChevronDown } from "react-icons/bi";
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    backgroundColor: "white",
    padding: "10px 0px"
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
  poppins: NextFont;
}

const Navbar = ({ links, poppins }: HeaderSearchProps)=>{
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} className={poppins.className}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={`${classes.link} ${poppins.className}`}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={`${classes.linkLabel} ${poppins.className}`}>{link.label}</span>
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
        className={`${classes.link} ${poppins.className}`}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} mb={50} style={{background: "transparent", paddingTop: "25px"}} withBorder={false}>
        <div className={`${classes.inner} bg-transparent`}>
        <Image src={Logo.src} height={100} width={100} alt="logo-icon" className='py-4' />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
    </Header>
  );
}
export default Navbar;
