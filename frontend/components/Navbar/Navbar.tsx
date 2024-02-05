
import { LogoDark, LogoWhite } from "@/public/images"
import Image from "next/image"
import { ModeToggle } from "./toggle-theme"
import Link from "next/link"


const Navbar = () =>
{
    return (
        <div
            className="  fixed w-full px-[10vw] max-sm:px-4 flex justify-between items-center py-4  border-1 border-b-black"
        >
            <Link href={'/'}>
                <Image src={LogoWhite} alt="Light Mode Image" className="  object-cover dark:hidden" />
                <Image src={LogoDark} alt="Light Mode Image" className="  object-cover hidden dark:block" />
            </Link>



            <ModeToggle />

        </div>
    )
}

export default Navbar