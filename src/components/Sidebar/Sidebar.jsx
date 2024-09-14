import Logo from "../Logo";
import { Logout, SidebarMenu } from "./SidebarMenu";

export const Sidebar = ({onTabClick}) => {
    return(
        <section className="hidden ${
          showSideBar ? 'translate-x-0' : '-translate-x-full'
        } md:flex flex-col items-start gap-7 w-4/5 md:w-1/5 py-8 px-3 md:px-5 :px-7 bg-faint-blue text-custom-grey-70">
            <Logo/>
            <SidebarMenu onTabClick={onTabClick} /> 
            <Logout />
        </section>
    )
}