import { Login } from "../../components/Login/Login";
import { LoginSidebar } from "../../components/Sidebar/LoginSideBar";
// import { Sidebar } from "../../components/Sidebar/Sidebar";

export const LoginPage = () => {
  return (
    <section className="flex ">
      <div className="w-1/5 pl-5 relative hidden md:block">
        <LoginSidebar />
        <div className=" w-full absolute inset-0 custom-gradient flex flex-col justify-end p-4">
          <h2 className="text-2xl font-bold mb-2 text-custom-white">
            The BEST place to subscribe / buy
          </h2>
        </div>
      </div>
      <Login />
    </section>
  );
};
