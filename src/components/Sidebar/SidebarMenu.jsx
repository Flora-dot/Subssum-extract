import DashboardIcon from "../../assets/icons/dashboard-icon.svg";
import BuyAirtimeIcon from "../../assets/icons/buy-airtime-icon.svg";
import WifiIcon from "../../assets/icons/wifi-icon.svg";
import TVIcon from "../../assets/icons/tv-icon.svg";
import Lightning from "../../assets/icons/lightning-icon.svg";
import ReloadIcon from "../../assets/icons/reload-icon.svg";
import PaperIcon from "../../assets/icons/paper-icon.svg";
import CallCenterIcon from "../../assets/icons/customer-care-icon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SidebarMenu = ({ onTabClick }) => {
  const [activeMenu, setActiveMenu] = useState(() => {
    return localStorage.getItem("activeMenu") || "home";
  });

  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  const handleTabClick = (tab) => {
    setActiveMenu(tab);
    onTabClick(tab);
  };
  return (
    <ul className="list-none flex flex-col gap-3">
      <Link to="/dashboard">
        <li
          onClick={() => handleTabClick("Dashboard")}
          className={`flex  py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Dashboard"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium w-100%">
            <img
              src={DashboardIcon}
              alt=""
              className="hover:filter:invert (100%)"
            />
            <p>Dashboard</p>
          </div>
        </li>
      </Link>
      <Link to="/buy-airtime">
        <li
          onClick={() => handleTabClick("Buy Airtime")}
          className={`flex items-center justify-between py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Buy Airtime"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex  gap-3 items-center text-xl font-medium">
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
      <Link to="/buy-airtime">
        <li
          onClick={() => handleTabClick("Buy Data")}
          className={`flex items-center justify-between py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Buy Data"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={WifiIcon} alt="" />
            <p>Buy Data</p>
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
      <Link to="/buy-airtime">
        <li
          onClick={() => handleTabClick("Tv Subscription")}
          className={`flex items-center justify-between py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Tv Subscription"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={TVIcon} alt="" />
            <p>Tv Subscription</p>
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
      <Link to="/buy-airtime">
        <li
          onClick={() => handleTabClick("Pay Bill")}
          className={`flex items-center justify-between py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Pay Bill"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={Lightning} alt="" />
            <p>Pay Electric Bill</p>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={activeMenu === "Pay Bill" ? "stroke-custom-white" : "stroke-custom-grey-70"}
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
      <Link to="airtime-to-cash">
        <li
          onClick={() => handleTabClick("Airtime to cash")}
          className={`flex  py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Airtime to cash"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={ReloadIcon} alt="" />
            <p>Airtime to cash</p>
          </div>
        </li>
      </Link>
      <Link to="/transaction-history">
        <li
          onClick={() => handleTabClick("Transaction History")}
          className={`flex  py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Transaction History"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={PaperIcon} alt="" />
            <p>Transaction History</p>
          </div>
        </li>
      </Link>
      <Link to="/help-support">
        <li
          onClick={() => handleTabClick("Help & Support")}
          className={`flex  py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Help & Support"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            <img src={CallCenterIcon} alt="" />
            <p>Help & Support</p>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export const Logout = () => {
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <Link to="/login">
      <div className="w-full flex gap-3 items-center text-xl mt-14 font-medium py-3 pl-2 pr-12 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white">
        <img src={CallCenterIcon} alt="" />
        <p>Log Out</p>
      </div>
    </Link>
  );
};
