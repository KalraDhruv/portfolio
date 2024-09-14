import Image from "next/image";
import "./globals.css";
export default function Home() {
	return (
		<main>
			<div className="relative w-full h-screen flex place-items-center">
				<div className="relative flex-col items-center inline-flex justify-center lg:flex-row w-full px-4 lg:px-10">
					<h1 className=" lg:absolute xl:text-5xl lg:text-4xl w-full pl-40 sm:text-5xl font-bold  mt-36 leading-tight z-10">
						THE OLD AND WISE<br /> MAJESTIC OWL <br />READY TO DIVE INTO<br /> PROGRAMMING
					</h1>

					<div className="relative w-7/12 aspect-video ">
						<Image
							src="/images/owl.jpg"
							layout="fill"
							objectFit="cover"
							alt="My Picture"
							className="bottom-0 right-0 rounded-3xl backdrop-blur-sm" />
					</div>

				</div>
			</div>
		</main>

	);
}
