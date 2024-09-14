import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
	 <main> 
	 <div className="ml-4 mt-8 relative aspect-video w-1/2 ">
			<Image
			src="/images/owl.jpg"
			layout="fill"
			objectFit="cover"
			alt="My Picture"
			className="absolute rounded-3xl backdrop-blur-sm bottom-4 right-4"/>
	 </div>
	 </main>
	  
	  );
}
