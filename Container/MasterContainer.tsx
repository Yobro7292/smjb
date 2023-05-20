"use client"

import { Poppins } from "next/font/google";
import { Container} from "@mantine/core";
import Navbar from "@/features/Navbar";
import { navBarLinks } from "../lib/data/navbarLinks";
import { footerLinksData } from "../lib/data/footerLinks";
import background from '../assets/images/background.png'
import { PropsWithChildren } from "react";
import { MantineProvider} from '@mantine/core';
import { FooterLinks } from "@/features/Footer/Index";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const MasterContainer = ({children}:PropsWithChildren) => {
  return (
    <MantineProvider theme={{ fontFamily: 'poppins',breakpoints: {
      xs: '30em',
      sm: '48em',
      md: '64em',
      lg: '74em',
      xl: '90em',
    }, }} withGlobalStyles withNormalizeCSS> 
    <Container size="xl" className={`${poppins.className}`} sx={(theme)=>({ '@media (max-width: 48em)': {
          backgroundImage: "none !important"
        },})} style={{ backgroundImage: `url(${background.src})`, backgroundSize: "cover"}}>
        <Navbar links={navBarLinks.links} poppins={poppins} />
        {children}
        <FooterLinks data={footerLinksData} />
      </Container>
      </MantineProvider>
  )
}

export default MasterContainer