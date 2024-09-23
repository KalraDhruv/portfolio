"use client"
import React from 'react'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
}from "@/components/ui/select";

import {FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const contactInfo=[
	{
		icon: <FaEnvelope/>,
		title: "Email",
		description: "dhruvkalra@proton.me",
	},
	{
		icon: <FaMapMarkerAlt/>,
		title: "Address",
		description: "Mississauga, Toronto",

	}
]

import {motion} from "framer-motion";


export default function Contact(){
	return(
		<div className="container mx-auto">
			<div className="flex flex-col xl:flex-row gap-[30px]">
				<div className= "xl:h-[54%] order-2 xl:order-none">
					{/** Form */}
					<form className="my-10 flex flex-col gap-6 p-10 bg-grayishBlue rounded-xl">
						<h3 className="text-4xl text-lightGrey">Journey of a Thousand Miles starts with a few steps</h3>
						<p className="text-lightGrey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil apiente paraitur id totam.</p>
						{/**input */}
						<div className="grid grid-cols-1 lg:md:grid-cols-2 gap-6">
							<Input type="firstname" placeholder="FirstName" />
							<Input type="lastName" placeholder="LastName" />
							<Input type="email" placeholder="Email address" />
							<Input type="firstName" placeholder="Phone number"/>
						</div>
						<Textarea className="h-[200px]"
						placeholder="Type your message here"/>
						{/**btn */}
						<Button size="lg" className="max-w-40">
							Send Message
						</Button>
						
					</form>
				</div>
				<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
					<ul className="flex flex-col gap-10">
						{contactInfo.map((item,index)=>
						{
							return <li key={index} className="flex items-center gap-6">
								<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-grayishBlue text-modernCyan rounded-md flex items-center justify-center">
									<div className="text-[28px]">{item.icon}</div>
								</div>
								<div className="flex-1">
									<p className="text-darkCharcoal">{item.title}</p>
									<h3 className="text-xl">{item.description}</h3>
								</div>
							</li>
						})}
					</ul>

				</div>
			</div>
		</div>
	)
}
