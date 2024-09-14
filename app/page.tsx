import Image from "next/image";
import "./globals.css";
export default function Home() {
	return (
		<main>
			<div className="relative w-full h-full">
				<div className="relative flex-col items-center flex justify-center px-4 lg:px-10">
					<h1 className=" lg:absolute relative tracking-widest lg:text-5xl lg:w-full lg:pl-10 sm:text-5xl font-semibold font-code my-10 lg:mt-0 leading-tight z-10">
						The old and wise<br /> majestic owl<br />ready to dive into<br /> programming 
					</h1>
					<h2 className="hidden lg:block absolute right-0 top-2 tracking-widest lg:text-5xl lg:pr-10 font-semibold font-code leading-tight z-10">
						Curious and<br/> ready to start <br/> a new adventure 
					</h2>
					<h2 className="hidden xl:block absolute right-0 bottom-12 tracking-widest lg:text-5xl lg:pr-10 font-semibold font-code leading-tight z-10">
						Interested in <br/> working on <br/> thought provoking<br/>projects
					</h2>
					<div className="relative lg:relative lg:mt-10 xl:mt-14 sm:w-1/2 lg:w-7/12 aspect-video">
						<Image
							src="/images/owl.jpg"
							layout="fill"
							objectFit="cover"
							alt="My Picture"
							className="rounded-3xl backdrop-blur-sm" />

					</div>

				</div>
			</div>
		</main>

	);
}
