import Logo from "../Logo";
import { Logout, SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {
    return(
        <section className="flex flex-col items-start gap-7 w-1/5 h-screen py-8 px-7 bg-faint-blue text-custom-grey-70">
            <Logo />
            <SidebarMenu />
            <Logout />
        </section>
    )
}