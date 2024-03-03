"use client";


import { Button } from "@nextui-org/button";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export const BlogCard = ({card}) => {

	return (
		<Card className="py-4 w-72 m-2">
						<CardBody className="overflow-visible py-2">
							<Image
							alt="Card background"
							className="object-cover rounded-xl"
							src={card.image}
							width={250}
							/>
						</CardBody>
      					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large">{card.title}</h4>
							<p className="text-tiny uppercase font-bold"></p>
							<small className="text-default-500">{card.subtitle}</small>
							<Button className="text-sm font-normal text-white-600 bg-primary">Read more...</Button>
     	 				</CardHeader>
						
    				</Card>
	);
};
