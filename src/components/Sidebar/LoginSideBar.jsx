import Logo from "../Logo";
import DashboardIcon from "../../assets/icons/dashboard-icon.svg";
import BuyAirtimeIcon from "../../assets/icons/buy-airtime-icon.svg";
import WifiIcon from "../../assets/icons/wifi-icon.svg";
import TVIcon from "../../assets/icons/tv-icon.svg";
import Lightning from "../../assets/icons/lightning-icon.svg";
import ReloadIcon from "../../assets/icons/reload-icon.svg";
import PaperIcon from "../../assets/icons/paper-icon.svg";
import CallCenterIcon from "../../assets/icons/customer-care-icon.svg";
import { Link } from "react-router-dom";

export const LoginSidebar = () => {
  return (
    <section className="hidden md:flex  lg:flex flex-col items-start gap-7 w-full h-full  py-8 px-7 bg-faint-blue text-custom-grey-70">
      <Logo />
      <LoginSidebarMenu />
    </section>
  );
};

export const LoginSidebarMenu = () => {
  return (
    <ul className="list-none flex flex-col gap-8">
      <Link to="/dashboard">
        <li className="flex items-center justify-between bg-custom-primary-blue text-custom-white py-3 px-3 rounded-xl">
          <div className="flex gap-3 items-center text-xl font-medium w-100%">
            <img
              src={DashboardIcon}
              alt=""
              className="hover:filter:invert (100%)"
            />
            <p>Dashboard</p>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8 9.5999L12 14.3999L7.20005 9.5999"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </Link>
      <Link to="/buy-airtime">
        <li className="flex items-center justify-between">
          <div className="flex gap-2 items-center text-xl font-medium">
            <img src={BuyAirtimeIcon} alt="" />
            <a href="/">Buy Airtime</a>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8 9.5999L12 14.3999L7.20005 9.5999"
              stroke="#6882B6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </Link>
      <li className="flex items-center justify-between">
        <div className="flex gap-3 items-center text-xl font-medium">
          <img src={WifiIcon} alt="" />
          <a href="/">Buy Data</a>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8 9.5999L12 14.3999L7.20005 9.5999"
            stroke="#6882B6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex gap-3 items-center text-xl font-medium">
          <img src={TVIcon} alt="" />
          <a href="/">Tv Subscrption</a>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8 9.5999L12 14.3999L7.20005 9.5999"
            stroke="#6882B6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex gap-3 items-center text-xl font-medium">
          <img src={Lightning} alt="" />
          <a href="/">Pay Electric Bill</a>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8 9.5999L12 14.3999L7.20005 9.5999"
            stroke="#6882B6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li>
        <div className="flex gap-3 items-center text-xl font-medium">
          <img src={ReloadIcon} alt="" />
          <a href="/">Airtime to cash</a>
        </div>
      </li>
      <Link to="/transaction-history">
        <li>
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={PaperIcon} alt="" />
            <p>Transaction History</p>
          </div>
        </li>
      </Link>
      <Link to="/help-support">
        <li>
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={CallCenterIcon} alt="" />
            <p>Help & Support</p>
          </div>
        </li>
      </Link>
    </ul>
  );
};
