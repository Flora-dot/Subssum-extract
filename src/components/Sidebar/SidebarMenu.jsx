import CallCenterIcon from "../../assets/icons/customer-care-icon.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoreAirtime } from "../AirtimeToCash/MoreAirtime";

export const SidebarMenu = ({ onTabClick }) => {
  const [activeMenu, setActiveMenu] = useState(() => {
    return localStorage.getItem("activeMenu") || "home";
  });

  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  const [activeSvg, setActiveSvg] = useState("");

  const handleTabClick = (tab, svgId) => {
    setActiveMenu(tab);
    onTabClick(tab);
    setActiveSvg(svgId);
  };
  return (
    <ul className="list-none flex flex-col gap-3">
      <Link to="/dashboard">
        <li
          onClick={() => handleTabClick("Dashboard")}
          className={`flex py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white ${
            activeMenu === "Dashboard"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium w-100%">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2095_396)">
                <path
                  d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                  className={`${
                    activeMenu === "Dashboard"
                      ? "fill-custom-white"
                      : "fill-[#6882B6]"
                  }`}
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
          <div className="flex gap-3 items-center text-xl font-medium">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6638 15.771C17.6638 15.771 16.5052 16.909 16.2212 17.2427C15.7587 17.7363 15.2137 17.9693 14.4992 17.9693C14.4305 17.9693 14.3573 17.9693 14.2886 17.9648C12.9284 17.8779 11.6644 17.3478 10.7164 16.8953C8.12431 15.643 5.8482 13.8652 3.95678 11.612C2.3951 9.73359 1.35093 7.99687 0.659397 6.13217C0.233485 4.99415 0.0777753 4.1075 0.146471 3.27113C0.192268 2.7364 0.398354 2.29308 0.778469 1.91374L2.34015 0.355256C2.56455 0.14502 2.8027 0.0307617 3.03626 0.0307617C3.32478 0.0307617 3.55835 0.204435 3.7049 0.350686C3.70948 0.355256 3.71406 0.359827 3.71864 0.364397C3.998 0.624906 4.26362 0.894556 4.54298 1.18249C4.68495 1.32874 4.8315 1.47499 4.97805 1.62581L6.22831 2.87351C6.71376 3.35797 6.71376 3.80586 6.22831 4.29032C6.0955 4.42286 5.96727 4.5554 5.83446 4.68337C5.44976 5.07642 5.75196 4.77483 5.35353 5.13132C5.34437 5.14046 5.33521 5.14503 5.33063 5.15417C4.93677 5.54722 5.01005 5.93113 5.09248 6.19164C5.09706 6.20535 5.10164 6.21906 5.10622 6.23277C5.43138 7.01887 5.88935 7.75926 6.58547 8.64134L6.59005 8.64591C7.85404 10.1998 9.18673 11.411 10.6568 12.3387C10.8446 12.4576 11.0369 12.5536 11.2201 12.645C11.385 12.7272 11.5407 12.8049 11.6735 12.8872C11.6918 12.8963 11.7101 12.91 11.7285 12.9192C11.8842 12.9969 12.0307 13.0334 12.1819 13.0334C12.562 13.0334 12.8001 12.7958 12.878 12.7181L13.7757 11.8222C13.9314 11.6668 14.1787 11.4795 14.4672 11.4795C14.7511 11.4795 14.9847 11.6577 15.1267 11.8131C15.1312 11.8177 15.1312 11.8177 15.1358 11.8222L17.6592 14.3405C18.1309 14.8067 17.6638 15.771 17.6638 15.771Z"
                className={`${
                  activeMenu === "Buy Airtime"
                    ? "fill-custom-white"
                    : "fill-[#6882B6]"
                }`}
              />
            </svg>
            <p>Buy Airtime</p>
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
              className={`${
                activeMenu === "Buy Airtime"
                  ? "stroke-custom-white"
                  : "stroke-[#6882B6]"
              }`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.61243 12.2041C9.14078 8.70189 14.8614 8.70189 18.3897 12.2041M8.80675 15.3748C10.5709 13.6237 13.4312 13.6237 15.1954 15.3748M12.0011 18.5455L12.0198 18.5269M2.40039 9.40162C7.70232 4.13891 16.2985 4.13891 21.6004 9.40162"
                className={`${
                  activeMenu === "Buy Data"
                    ? "stroke-custom-white"
                    : "stroke-[#6882B6]"
                }`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
              className={`${
                activeMenu === "Buy Data"
                  ? "stroke-custom-white"
                  : "stroke-[#6882B6]"
              }`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.40002 20.4L12 16.8L15.6 20.4M4.80002 16.8H19.2C20.5255 16.8 21.6 15.7255 21.6 14.4V5.99998C21.6 4.67449 20.5255 3.59998 19.2 3.59998H4.80002C3.47454 3.59998 2.40002 4.67449 2.40002 5.99998V14.4C2.40002 15.7255 3.47454 16.8 4.80002 16.8Z"
                className={`${
                  activeMenu === "Tv Subscription"
                    ? "stroke-custom-white"
                    : "stroke-[#6882B6]"
                }`}
                stroke="#6882B6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

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
              className={`${
                activeMenu === "Tv Subscription"
                  ? "stroke-custom-white"
                  : "stroke-[#6882B6]"
              }`}
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2222 14.4889L9.51105 21.6L18.7555 11.6445L13.7777 8.80002L14.4888 2.40002L5.24438 12.3556L10.2222 14.4889Z"
                className={`${
                  activeMenu === "Pay Bill"
                    ? "stroke-custom-white"
                    : "stroke-[#6882B6]"
                }`}
                stroke="#6882B6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Pay Electric Bill</p>
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
              className={`${
                activeMenu === "Pay Bill"
                  ? "stroke-custom-white"
                  : "stroke-[#6882B6]"
              }`}
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
          className={`flex  py-3 px-3 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white relative ${
            activeMenu === "Airtime to cash"
              ? "bg-custom-primary-blue text-custom-white"
              : ""
          }`}
        >
          <div className="flex gap-3 items-center text-xl font-medium">
            {activeMenu === "Airtime to cash" ? (
              <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.78019 3.6001H5.07431C4.51268 3.6001 3.97405 3.82135 3.57691 4.21517C3.17977 4.609 2.95667 5.14314 2.95667 5.7001V18.3001C2.95667 18.8571 3.17977 19.3912 3.57691 19.785C3.97405 20.1788 4.51268 20.4001 5.07431 20.4001H8.78019M9.04338 12.0001H21.0434M21.0434 12.0001L16.4582 7.2001M21.0434 12.0001L16.4582 16.8001"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.21216 18.7881C1.46313 15.0391 1.46313 8.96071 5.21217 5.21168C7.5821 2.84174 10.8829 1.96995 13.9376 2.5963M19.7396 6.31751C22.505 10.0741 22.188 15.3887 18.7886 18.7881C16.3431 21.2336 12.9064 22.0839 9.77169 21.339M17.8377 7.86043V4.26043L21.4377 4.26043L17.8377 7.86043ZM6.06008 16.0366V19.6366H2.46008L6.06008 16.0366Z"
                  className={`${
                    activeMenu === "Airtime to cash"
                      ? "stroke-custom-white"
                      : "stroke-[#6882B6]"
                  }`}
                  stroke="#6882B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

            <p>Airtime to cash</p>
          </div>
        </li>
      </Link>
      {activeMenu === "Airtime to cash" && <MoreAirtime />}
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.79995 7.8H16.2M7.79995 12.6H16.2M5.75995 3H18.24C19.1015 3 19.8 3.80589 19.8 4.8V21L17.2 19.2L14.6 21L12 19.2L9.39995 21L6.79995 19.2L4.19995 21V4.8C4.19995 3.80589 4.89839 3 5.75995 3Z"
                className={`${
                  activeMenu === "Transaction History"
                    ? "stroke-custom-white"
                    : "stroke-[#6882B6]"
                }`}
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84615 12.0005V7.95453C5.85817 7.15923 6.027 6.37412 6.34298 5.64418C6.65896 4.91424 7.11587 4.25383 7.68754 3.70077C8.2592 3.14771 8.93438 2.71288 9.67439 2.4212C10.4144 2.12952 11.2047 1.98671 12 2.00097C12.7953 1.98671 13.5856 2.12952 14.3256 2.4212C15.0656 2.71288 15.7408 3.14771 16.3125 3.70077C16.8841 4.25383 17.341 4.91424 17.657 5.64418C17.973 6.37412 18.1418 7.15923 18.1538 7.95453V12.0005M15.0769 20.077C15.893 20.077 16.6756 19.7529 17.2526 19.1758C17.8297 18.5988 18.1538 17.8163 18.1538 17.0002V13.5389M15.0769 20.077C15.0769 20.587 14.8743 21.0761 14.5137 21.4368C14.153 21.7974 13.6639 22 13.1538 22H10.8462C10.3361 22 9.84698 21.7974 9.48633 21.4368C9.12569 21.0761 8.92308 20.587 8.92308 20.077C8.92308 19.567 9.12569 19.0779 9.48633 18.7173C9.84698 18.3566 10.3361 18.154 10.8462 18.154H13.1538C13.6639 18.154 14.153 18.3566 14.5137 18.7173C14.8743 19.0779 15.0769 19.567 15.0769 20.077ZM3.53846 9.69291H5.07692C5.28094 9.69291 5.47659 9.77395 5.62085 9.9182C5.76511 10.0624 5.84615 10.2581 5.84615 10.4621V15.0773C5.84615 15.2813 5.76511 15.4769 5.62085 15.6212C5.47659 15.7654 5.28094 15.8465 5.07692 15.8465H3.53846C3.13044 15.8465 2.73912 15.6844 2.4506 15.3959C2.16209 15.1074 2 14.7161 2 14.3081V11.2313C2 10.8233 2.16209 10.432 2.4506 10.1435C2.73912 9.85499 3.13044 9.69291 3.53846 9.69291ZM20.4615 15.8465H18.9231C18.7191 15.8465 18.5234 15.7654 18.3791 15.6212C18.2349 15.4769 18.1538 15.2813 18.1538 15.0773V10.4621C18.1538 10.2581 18.2349 10.0624 18.3791 9.9182C18.5234 9.77395 18.7191 9.69291 18.9231 9.69291H20.4615C20.8696 9.69291 21.2609 9.85499 21.5494 10.1435C21.8379 10.432 22 10.8233 22 11.2313V14.3081C22 14.7161 21.8379 15.1074 21.5494 15.3959C21.2609 15.6844 20.8696 15.8465 20.4615 15.8465Z"
                className={`${
                  activeMenu === "Help & Support"
                    ? "stroke-custom-white"
                    : "stroke-[#6882B6]"
                }`}
                stroke="#6882B6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Help & Support</p>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export const Logout = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("activeMenu");
    localStorage.removeItem("activeTab");
    setActiveMenu(""); // Reset state
  };

  return (
    <Link to="/login">
      <div
        className="w-full flex gap-3 items-center text-xl mt-14 font-medium py-3 pl-2 pr-12 rounded-xl hover:bg-custom-grey-70 hover:text-custom-white"
        onClick={handleLogout}
      >
        <img src={CallCenterIcon} alt="" />
        <p>Log Out</p>
      </div>
    </Link>
  );
};
