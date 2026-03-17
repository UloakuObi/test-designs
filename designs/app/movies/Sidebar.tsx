import { Sidebar, 
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader, } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutGrid, Film, MonitorPlay, Bookmark } from "lucide-react"

interface AppSidebarProps {
    className?: string;
}

export default function AppSidebar({ className }: AppSidebarProps) {
    return (
        <Sidebar variant="floating" className={className} style={{ "--sidebar": "#161D27", "--sidebar-ring": "#161D27", "--sidebar-primary": "#161D27" } as React.CSSProperties}>
            <SidebarHeader className="mx-auto mb-10">Logo</SidebarHeader>
            <SidebarContent className="gap-8 mx-auto">
                <LayoutGrid/>
                <Film/>
                <MonitorPlay/>
                <Bookmark/>
            </SidebarContent>
            <SidebarFooter>
                <Avatar className="mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </SidebarFooter>
        </Sidebar>
    )
}