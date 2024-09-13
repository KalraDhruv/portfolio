import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar'

function Header(): JSX.Element {
	return(
		<header className="py-8 xl:py-12 bg-darkCharcoal text-lightGrey font-code font-semibold">
			<div className="container mx-auto flex justify-between items-center">
				<Link href='/'>
				<h2 className=" text-4xl hover:text-modernCyan">
					Dhruv
					<span className="text-modernCyan">
						.
					</span>
				</h2>
				</Link>
				 {/** Navbar only for desktops and large screens*/}
				<aside className="hidden xl:flex justify-end items-center gap-8 ">
					<Navbar />
				</aside>
				{/** Navbar for mobiles and smaller screens */}
				<aside className="xl:hidden">
					<p>mobile nav</p>
				</aside>



			</div>
		</header>
	);
}
export default Header;
