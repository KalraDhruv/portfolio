import Image from "next/image";
import "./globals.css";
export default function Home() {
	return (
		<main>
			<div className="relative w-full h-full">
				<div className="relative text-darkCharcoal flex-col items-center flex justify-center px-4 lg:px-10">
					<h1 className=" lg:absolute relative tracking-widest lg:text-5xl lg:w-full lg:pl-10 sm:text-5xl font-semibold font-code my-10 lg:mt-0 leading-tight z-10">
						The old and wise<br /> majestic owl<br />ready to dive into<br /> programming 
					</h1>
					<h2 className="hidden text-darkCharcoal lg:block absolute right-0 top-2 tracking-widest lg:text-5xl lg:pr-10 font-semibold font-code leading-tight z-10">
						Curious and<br/> ready to start <br/> a new adventure 
					</h2>
					<h2 className="hidden xl:block absolute right-0 bottom-12 tracking-widest lg:text-5xl lg:pr-10 font-semibold font-code leading-tight z-10">
						Interested in <br/> working on <br/> thought provoking<br/>projects
					</h2>
					<div className="relative lg:relative lg:mt-10 xl:mt-14 w-1/2 lg:w-7/12 aspect-video">
						<Image
							src="/images/owl.jpg"
							layout="fill"
							objectFit="cover"
							alt="Picture"
							className="rounded-3xl size-1 backdrop-blur-sm" />
					</div>
				</div>
				<div>
					<div className="lg:flex-col lg:text-center">
					<button className="xs:w-1/2 lg:w-1/4 lg:m-5 lg:px-10 xs:text-sm md:text-lg lg:inline-block button text-lightGrey font-bold shadow-lg block">
						Web Developer
					</button>
					<div className="xs:w-1/2 lg:w-1/4 lg:m-5 xs:text-sm md:text-lg lg:inline-block button block text-lightGrey font-bold shadow-lg ">System Designer</div>
					<div className="lg:block">
						<div className="xs:w-1/2 lg:w-1/4 lg:m-5 xs:text-sm md:text-lg button lg:inline-block block text-lightGrey font-bold shadow-lg">Data Analyst</div>
						<div className="xs:w-1/2 lg:w-1/4 lg:m-5 xs:text-sm md:text-lg button lg:inline-block block text-lightGrey font-bold shadow-lg">Math & Physics Enthusiast</div>
					</div>
					</div>
				</div>
			</div>
		</main>

	);
}
