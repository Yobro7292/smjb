import {
  IconFingerprint,
} from "@tabler/icons-react";
import { ImBooks, ImPriceTags } from 'react-icons/im'
import { GrCircleInformation, GrResources, GrBlog } from 'react-icons/gr'
import { FaHandsHelping } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { GiGears } from 'react-icons/gi'
import { MdOutlinePeopleAlt, MdOutlineQuestionAnswer, MdOutlineForum } from 'react-icons/md'
export const navBarLinks = {
  links: [
    {
      link: "/about",
      label: "Features",
      icon: <IconFingerprint size="1rem" stroke={1.5} />
    },
    {
      link: "#1",
      label: "Learn",
      icon: <ImBooks />,
      links: [
        {
          link: "/docs",
          label: "Documentation",
          icon: <IoDocumentTextOutline />
        },
        {
          link: "/resources",
          label: "Resources",
          icon : <GrResources />
        },
        {
          link: "/community",
          label: "Community",
          icon: <MdOutlinePeopleAlt />
        },
        {
          link: "/blog",
          label: "Blog",
          icon: <GrBlog />
        },
      ],
    },
    {
      link: "/about",
      label: "About",
      icon: <GrCircleInformation />
    },
    {
      link: "/pricing",
      label: "Pricing",
      icon: <ImPriceTags />
    },
    {
      link: "#2",
      label: "Support",
      icon: <FaHandsHelping />,
      links: [
        {
          link: "/faq",
          label: "FAQ",
          icon: <MdOutlineQuestionAnswer />
        },
        {
          link: "/demo",
          label: "Book a demo",
          icon: <GiGears />
        },
        {
          link: "/forums",
          label: "Forums",
          icon: <MdOutlineForum />
        },
      ],
    },
  ],
};
