import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { cards } from "@/config/cards";
import { title, subtitle } from "@/components/primitives";
import { YoutubeIcon } from "@/components/icons";
import { Image} from "@nextui-org/react";
import {BlogCard} from "@/components/card";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="flex items-center justify-center gap-5 py-8 md:py-10">
				<Image 
				width={800}
				alt="NextUI hero Image"
				src="https://images.unsplash.com/photo-1498475932703-000eb46e6375?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHx0cmF2ZWxsaW5nfGVufDB8fDB8fHww"
			/>
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Begin your&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>journey&nbsp;</h1>
				<br />
				<h1 className={title()}>
				Your gateway to wanderlust and adventure!
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
				Get ready to ignite your wanderlust and embark on a voyage of discovery with us. Let's make every mile a memory
				</h2>
			</div>
			</div>
			

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.instagram}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Explore
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.youtube}
				>
					<YoutubeIcon size={20} />
					Learn more
				</Link>
			</div>

			<div className="mt-8">
				<h1 className="text-center">Latest from the Blog</h1>
				<div className="container flex flex-wrap my-6">
					{cards.map((card) => <BlogCard card={card} key={card.id} /> )}
					
				</div>
				<div className="flex items-center justify-center">
					<Snippet  hideSymbol hideCopyButton variant="flat">
					<span>
						View More
					</span>
				</Snippet>
				</div>
				
			</div>
		</section>
	);
}
