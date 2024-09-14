import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar'

function Header(): JSX.Element {
	return(
		<header className="py-4 xl:py-8  bg-darkCharcoal text-lightGrey font-code font-semibold">
			<div className="container mx-auto flex justify-between items-center">
				<Link href='/'>
				<h2 className="text-2xl 2xl:text-4xl xl:text-3xl hover:text-modernCyan">
					The Wise Owl	
					<span className="text-modernCyan">
						.
					</span>
				</h2>
				</Link>
				 {/** Navbar only for desktops and large screens*/}
				<aside className="hidden lg:flex justify-end items-center gap-8 ">
					<Navbar />
				</aside>
				{/** Navbar for mobiles and smaller screens */}
				<aside className="lg:hidden">
					<p>mobile nav</p>
				</aside>
			</div>
		</header>
	);
}
export default Header;
