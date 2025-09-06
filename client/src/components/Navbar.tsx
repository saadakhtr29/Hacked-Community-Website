import CardNav from "./CardNav.tsx";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Community", ariaLabel: "About Community", href: "About-us" },
        { label: "Careers", ariaLabel: "About Careers", href: "#" },
        { label: "PYQS", ariaLabel: "Previous Year Questions", href: "previous-year-questions" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#" },
        { label: "Events", ariaLabel: "Events", href: "Events" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:" },
        {
          label: "Twitter",
          ariaLabel: "Twitter",
          href: "https://x.com/JhHacked",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/company/hacked-jh/",
        },
        {
          label: "Instagram",
          ariaLabel: "Instagram",
          href: "https://www.instagram.com/hacked.jh/",
        },
        {
          label: "Github",
          ariaLabel: "Github",
          href: "https://github.com/hackedbyjh",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo=""
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
