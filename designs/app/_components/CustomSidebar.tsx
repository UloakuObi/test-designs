import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutGrid, Film, MonitorPlay, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button";

interface SidebarProps {
    className?: string;
    variant?: "desktop" | "mobile" | undefined;
}

export default function CustomSidebar({ className, variant }: SidebarProps) {
    // const desktopNavbarLayout = "w-[4rem] min-h-screen absolute flex flex-col"
    // const mobileNavbarLayout = "h-[4rem] mx-auto w-[95%] flex mb-10"
    // const navbarLayout = variant === "desktop" ? desktopNavbarLayout : mobileNavbarLayout
    const navbarOrientation = variant === "desktop" ? "hidden lg:block" : "block lg:hidden" 
    
    return (
        <div className={`${navbarOrientation} ${className}`}>
            {/* DESKTOP NAVBAR */}
            <div className="hidden lg:block">
            <div className={`border border-solid border-[#161D27] rounded-lg bg-[#161D27] flex flex-col items-center justify-between 
                py-4 w-[4rem] min-h-screen absolute`}>
                <aside className={`flex gap-4 flex-col items-center`}>
                    <p className={`mb-10`}>Logo</p>
                    <div className={`flex flex-col gap-4`}>
                        <Button variant="ghost" className="cursor-pointer group"><LayoutGrid className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                        <Button variant="ghost" className="cursor-pointer group"><Film className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                        <Button variant="ghost" className="cursor-pointer group"><MonitorPlay className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                        <Button variant="ghost" className="cursor-pointer group"><Bookmark className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                    </div>
                </aside>
                <div className="">
                    <Avatar className="mx-auto">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            </div>

            {/* MOBILE NAVBAR */}
            <div className="block lg:hidden">
            <div className={`border border-solid border-white rounded-lg bg-[#161D27] 
                flex gap-2 sm:gap-4 md:gap-4 items-center justify-between 
                py-4 h-[4rem]  w-[95%] mb-10 px-4`}>
                <p className={``}>Logo</p>
                <div className={`flex gap-1 sm:gap-2 md:gap-4`}>
                    <Button variant="ghost" className="cursor-pointer group"><LayoutGrid className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                    <Button variant="ghost" className="cursor-pointer group"><Film className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                    <Button variant="ghost" className="cursor-pointer group"><MonitorPlay className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                    <Button variant="ghost" className="cursor-pointer group"><Bookmark className="!w-[25px] !h-[25px] group-hover:text-red-500"/></Button>
                </div>
                <div className="">
                    <Avatar className="mx-auto">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            </div>
        </div>
    )
}