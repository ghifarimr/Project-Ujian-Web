import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
    return (
        <div className='fixed flex items-center justify-between w-full p-4 shadow-md md:px-10 md:py-6 lg:px-20 lg:py-6 bg-[#1B4242]'>
            <h1 className='text-xl font-bold text-white md:text-3xl'>
                <Link href="/">Memozone.</Link>
            </h1>
            <Link href={"/note/create"} className={cn(buttonVariants({ variant: "default" }), "bg-[#7ED7C1] hover:bg-[#7ED7C1]/90 text-black")}>
                Create Note
            </Link>
        </div>
    )
}

export default Navbar