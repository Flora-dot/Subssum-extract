import { Login } from "../../components/Login/Login"
import { Sidebar } from "../../components/Sidebar/Sidebar"

export const LoginPage = () => {
    return(
        <section className="flex ">
            <Sidebar />
            <Login />
        </section>
    )
}