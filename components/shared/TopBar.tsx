import { OrganizationSwitcher} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    return(
        <nav className="topbar">
            <Link href='/' className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}
                />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
            </Link>

            <div className="felx items-center gap-1">
                <div className="block md:hidden">
                    

                </div>

                <OrganizationSwitcher
                appearance={{
                    baseTheme:dark,
                    elements:{
                        organizationSwitcherTrigger:"px-4 py-2"
                    }
                }}/>
            </div>
        </nav>
    );
};
