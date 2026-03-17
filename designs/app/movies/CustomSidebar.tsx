import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutGrid, Film, MonitorPlay, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button";

interface SidebarProps {
    className?: string;
}

export default function CustomSidebar({ className }: SidebarProps) {
    return (
        <div className="hidden lg:block">
            <div className="border border-solid border-[#161D27] rounded-lg bg-[#161D27] w-[4rem] 
                min-h-screen absolute flex flex-col items-center justify-between 
                py-4">
                <aside className="flex flex-col items-center gap-4">
                    <p className="mb-10">Logo</p>
                    <div className="flex flex-col gap-6">
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
    )
}