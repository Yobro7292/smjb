"use client"

import { Poppins } from "next/font/google";
import { Container} from "@mantine/core";
import Navbar from "@/features/Navbar";
import { navBarLinks } from "../lib/data/navbarLinks";
import background from '../assets/images/background.png'
import { PropsWithChildren } from "react";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const MasterContainer = ({children}:PropsWithChildren) => {
  return (
    <Container size="xl" className={`${poppins.className}`} style={{ backgroundImage: `url(${background.src})`, backgroundSize: "cover"}}>
        <Navbar links={navBarLinks.links} poppins={poppins} />
        {children}
      </Container>
  )
}

export default MasterContainer