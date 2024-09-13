"use client";
import Link from 'next/link';
import {usePathname} from "next/navigation";

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
function Navbar():JSX.Element{
    const pathname = usePathname(); 
    console.log(pathname);
    return(
        <nav className="flex justify-between flex-auto space-x-5">
            {links.map((link, index)=>{
                return(
                <Link href={link.path} key={index} className={`${
                link.path ===pathname? 'text-modernCyan border-b-2 border-modernCyan'
                  : ''
                }`}>
                    {link.name}
                </Link>)
            })}
        </nav>
    )
}
export default Navbar;