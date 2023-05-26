import { Box, NavLink } from "@mantine/core";
import { HeaderSearchProps } from "@/features/Navbar";
import { useRouter } from "next/navigation";

const NavDrawer = ({ links }: HeaderSearchProps) => {
  const router = useRouter()
  const onLinkClicked = (link:string) => {
    router.push(link)
  }

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <NavLink key={item.link} label={item.label} icon={item.icon} onClick={()=>{
        onLinkClicked(item.link)
      }} />
    ));

    if (menuItems) {
      return (
        <NavLink
          key={link.label}
          label={link.label}
          icon={link.icon}
          childrenOffset={28}
        >
          {menuItems}
        </NavLink>
      );
    }

    return (
      <NavLink
        key={link.label}
        label={link.label}
        icon={link.icon}
        childrenOffset={28}
        onClick={()=>{
          onLinkClicked(link.link)
        }}
      />
    );
  });

  return (
    <Box w={240}>
      {/* {navBarLinks.links.map((link, i) => (
        <>
          {link?.links && (
            <NavLink
              key={i}
              label={link.label}
              icon={link.icon}
              childrenOffset={28}
            >
              {link.links.map((subLink, i) => (
                <NavLink key={i} label={subLink.label} />
              ))}
            </NavLink>
          )}
          {!link?.links && (
            <NavLink
              key={i}
              label={link.label}
              icon={link.icon}
              childrenOffset={28}
            />
          )}
        </>
      ))} */}
      {items}
    </Box>
  );
};
export default NavDrawer;
