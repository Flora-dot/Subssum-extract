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
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2095_396)">
                <path
                  d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                  fill="#ffffff"
                />
              </g>
              <defs>
                <clipPath id="clip0_2095_396">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
