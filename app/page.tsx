import Image from "next/image";
import "./globals.css";
export default function Home() {
	return (
		<main>
			<div className="relative w-full h-screen flex ">
				<div className="relative flex-col items-center inline-flex justify-center lg:flex-row w-full px-4 lg:px-10">
					<h1 className="lg:absolute xl:text-7xl sm:text-6xl font-bold mb-6 leading-tight z-10">
						THE OLD AND WISE<br /> MAJESTIC OWL <br />READY TO DIVE INTO<br /> PROGRAMMING
					</h1>

					<div className="relative lg:ml-36 mt-12 bottom-0 right-0 aspect-video w-7/12 ">
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
