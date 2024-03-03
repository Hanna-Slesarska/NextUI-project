export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		youtube: "https://www.youtube.com",
		instagram: "https://www.instagram.com/",
		facebook: "https://www.facebook.com/",
		discord: "https://discord.gg/9b6yyZKmH4",
	},
};
