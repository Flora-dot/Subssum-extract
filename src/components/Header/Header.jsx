import { CustomButton } from "../Button";
import { Link } from "react-router-dom";

export const HeaderSignedout = () => {
  return (
    <header className="flex items-center justify-between">
      <p>
        <a
          href="/Login"
          className="text-base font-semibold text-custom-primary-blue flex items-center gap-3"
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.39998 10.7998L1.59998 5.9998L6.39998 1.19981"
              stroke="#4169E1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Home
        </a>
      </p>
      <CustomButton
        children={"Sign Up"}
        className={
          "px-12 py-3 bg-custom-primary-blue text-custom-white rounded-xl text-base font-semibold"
        }
      />
    </header>
  );
};

export const HeaderSignedIn = ({ activeTab }) => {
  //   const [activeTab, setActiveTab] = useState("Dashboard");
  console.log(activeTab);

  return (
    <header className="flex items-center justify-between">
      <p className="font-medium text-xl leading-5 text-custom-grey-90">
        {activeTab === "Dashboard" && "Welcome, Lawal Wahab"}
        {activeTab === "Buy Airtime" && "Buy Airtime"}
        {activeTab === "Buy Data" && "Buy Data"}
        {activeTab === "Tv Subscription" && "TV Subscription"}
        {activeTab === "Pay Bill" && "Pay Electric Bill"}
        {activeTab === "Airtime to cash" && "Airtime to Cash"}
        {activeTab === "Transaction History" && "Transaction History"}
        {activeTab === "Help & Support" && "Help & Support"}
      </p>
      <div className="flex items-center gap-3">
        <Link
          to="/upgrade"
          className="font-semibold text-base text-custom-primary-blue"
        >
          Upgrade To Merchant
        </Link>
        <CustomButton className={"rounded-full p-2 bg-custom-grey-30"}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29309 13.5233C6.80262 13.9092 7.47547 14.1439 8.21309 14.1439C8.9507 14.1439 9.62355 13.9092 10.1331 13.5233M2.8186 11.5373C2.51504 11.5373 2.3455 11.0852 2.52912 10.834C2.95521 10.251 3.36646 9.39607 3.36646 8.36651L3.38404 6.87467C3.38404 4.10291 5.54608 1.85596 8.21309 1.85596C10.9194 1.85596 13.1133 4.13601 13.1133 6.94859L13.0957 8.36651C13.0957 9.40315 13.4928 10.2628 13.9015 10.8459C14.078 11.0978 13.9081 11.5373 13.6083 11.5373H2.8186Z"
              stroke="#4169E1"
              stroke-width="1.27999"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CustomButton>

        <Link to="/user-profile">
          <CustomButton className={"rounded-full p-2 bg-custom-grey-30"}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58918 3.98783C9.58918 5.71752 8.49072 6.98051 7.1357 6.98051C5.78068 6.98051 4.68222 5.71752 4.68222 3.98783C4.68222 2.25814 5.78068 0.855957 7.1357 0.855957C8.49072 0.855957 9.58918 2.25814 9.58918 3.98783Z"
                stroke="#4169E1"
                stroke-width="1.27999"
                stroke-linejoin="round"
              />
              <path
                d="M2.13622 9.48601C2.31209 9.16529 2.63487 8.96807 2.98392 8.96807H11.0162C11.3653 8.96807 11.688 9.16529 11.8639 9.48601L13.0089 11.5739C13.3905 12.2699 12.9186 13.1439 12.1612 13.1439H1.83896C1.08153 13.1439 0.609612 12.2699 0.991259 11.5739L2.13622 9.48601Z"
                stroke="#4169E1"
                stroke-width="1.27999"
                stroke-linejoin="round"
              />
            </svg>
          </CustomButton>
        </Link>
      </div>
    </header>
  );
};
