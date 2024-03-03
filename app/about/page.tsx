import { title } from "@/components/primitives";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import  ModalView  from "@/app/about/modal";


export default function AboutPage() {

	return (
		<div>
			<h1 className={title()}>Contact Us</h1>
			<form className="flex flex-col w-full  gap-2 m-4">
				<div className="flex w-full gap-2 m-4">
					<Input type="name" label=" Full Name" placeholder="Enter your name" />
					<Input type="email" label="Email" placeholder="Enter your email" />
				</div>
				<Textarea
					label="Message"
					placeholder="Enter your message"
					className="w-full mx-4"
					/>
					<div>
					<RadioGroup
						label="Select your favorite city"
						orientation="horizontal"
						className="w-full"
						>
							<Radio className="text-xs" value="buenos-aires">Buenos Aires</Radio>
							<Radio className="text-xs" value="sydney">Sydney</Radio>
							<Radio className="text-xs" value="san-francisco">San Francisco</Radio>
							<Radio className="text-xs" value="london">London</Radio>
							<Radio className="text-xs" value="tokyo">Tokyo</Radio>
						</RadioGroup>
					</div>
					<Button color="primary">Submit</Button>
					<div>
						<ModalView />
					</div>
      
			</form>

    

		</div>
	);
}
