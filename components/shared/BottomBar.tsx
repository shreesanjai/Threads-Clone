"use client"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation'

export default function BottomBar() {
    const pathName=usePathname();
    return(
        <section className="bottombar">
            <div className="bottombar_container">
                {
                    sidebarLinks.map((link)=>
                        {
                           
                            const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route
    
                            return (
                                <div>
                                <Link 
                                    href={link.route}
                                    key={link.label}
                                    className={`bottombar_link ${isActive && 'bg-primary-500'}`}
                                >
    
                                    <Image 
                                    src={link.imgURL}
                                    width={24} 
                                    height={24}
                                    alt={link.label}
                                    />
    
                                    <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                        {link.label.split(" ")[0]}
                                    </p>
    
                                </Link>
                            </div>
                            );
                        })
                }
            </div>
        </section>
    );
};
