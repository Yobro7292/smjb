'use client';
import Navbar from '@/features/Navbar';
import { Container, MantineProvider } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import {navBarLinks} from '@/lib/data/navBarLinks.js';
import '../_styles/masterPageStyle.css';

const MasterContainer = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider
    inherit
      theme={{
        fontFamily: "poppins !important",
        breakpoints: {
          xs: "30em",
          sm: "48em",
          md: "64em",
          lg: "74em",
          xl: "98em",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Container
        size={"xl"}
        sx={(theme) => ({
          "@media (max-width: 48em)": {
            backgroundImage: "none !important",
          },
        })}
        style={{ backgroundImage: `url()`, backgroundSize: "cover" }}
      >
        <Navbar links={navBarLinks.links} />
        {children}
        {/* <FooterLinks data={footerLinksData} /> */}
      </Container>
    </MantineProvider>
  )
}

export default MasterContainer