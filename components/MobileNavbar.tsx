"use client";
import {Sheet, SheetContent, SheetTrigger} from './ui/sheet';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {MdMenu} from'react-icons/md';
import { linkSync } from 'fs';

const links = [
    {
        name:"Home",
        path:"/",
    },
    {
        name:"About-Me",
        path:"/about-me",
    },
    {
        name:"Projects",
        path:"/projects",
    },
    {
        name:"Contact",
        path:"/contact",
    },

]
function MobileNavbar():JSX.Element{
    const pathname= usePathname();
    return(
        <Sheet>
            <SheetTrigger className="flex justify-center font-code items-center">
                <MdMenu className="text-3xl text-modernCyan"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col text-darkCharcoal items-center text-center text-4xl">
                <Link href="/" className="font-semibold my-12 hover:text-modernCyan">
                    <h1>Owl <span className="text-modernCyan">.</span></h1>
                </Link>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link,index)=>{
                        return <Link href={link.path} key={index} className={'${link.path === pathname && "text-modernCyan border-b-2 border-modernCyan" }text-xl capitalize hover:text-modernCyan transition-all'}>
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNavbar;