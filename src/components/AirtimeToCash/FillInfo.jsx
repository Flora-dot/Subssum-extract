import React, { useState } from "react";
import EtisalaIcon from "../../assets/icons/etisalat-icon.svg";
import MTNIcon from "../../assets/icons/mtn-icon.svg";
import AIrtelIcon from "../../assets/icons/airtel-logo.svg";
import { CustomButton } from "../Button";

export const FillInfo = () => {
  return (
    <div className="w-full p-7 rounded-xl mt-9 border-2 border-custom-grey-30 bg-custom-faint-white">
      <h4 className="text-center font-semibold text-xl text-custom-grey-60">
        Airtime to Cash
      </h4>
      <form action="">
        <div className="w-full flex flex-col md:flex-row gap-4 mt-8">
          <NetworkProviderDropdown />
          <div>
            <label
              htmlFor="phone-number"
              className="text-custom-grey-60 font-normal text-sm"
            >
              Phone Number
            </label>
            <input
              name="phone-number"
              type="text"
              placeholder="08094562627"
              className="w-full h-14 px-4 py-2 text-left border-2 bg-custom-white border-custom-grey-30 rounded-lg focus:outline-none flex items-center justify-between placeholder:text-sm placeholder:font-semibold placeholder:text-custom-grey-60"
            />
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="mmount"
            className="text-custom-grey-60 font-normal text-sm"
          >
            Amount
          </label>
          <input
            name="amount"
            type="text"
            placeholder="₦5,000"
            className="w-full h-14 px-4 py-2 text-left border-2 bg-custom-white border-custom-grey-30 rounded-lg focus:outline-none flex items-center justify-between placeholder:text-sm placeholder:font-semibold placeholder:text-custom-grey-60"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="airtime-pin"
            className="text-custom-grey-60 font-normal text-sm"
          >
            Airtime Share Pin
          </label>
          <input
            name="airtime-pin"
            type="text"
            placeholder="3546576433"
            className="w-full h-14 px-4 py-2 text-left border-2 bg-custom-white border-custom-grey-30 rounded-lg focus:outline-none flex items-center justify-between placeholder:text-sm placeholder:font-semibold placeholder:text-custom-grey-60"
          />
        </div>
        <CustomButton
          className={
            "bg-custom-primary-blue text-custom-white w-full mt-14 p-4 rounded-lg font-semibold text-base hover:bg-dark-blue"
          }
          children={"Proceed"}
        />
      </form>
    </div>
  );
};




const networkProviders = [
  { name: "MTN", icon: MTNIcon },
  { name: "9mobile", icon: EtisalaIcon },
  { name: "Airtel", icon: "" },
  { name: "Glo", icon: "🟩" },
];



const NetworkProviderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (provider) => {
    setSelectedProvider(provider);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-1/2">
      <label className="text-custom-grey-60 font-normal text-sm">
        Select Network
      </label>
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 h-14 text-left border-2 bg-custom-white border-custom-grey-30 rounded-lg focus:outline-none flex items-center justify-between"
        type="button"
      >
        {selectedProvider ? (
          <>
            <span>{selectedProvider.icon}</span>
            <span className="ml-2">{selectedProvider.name}</span>
          </>
        ) : (
          <span className="text-sm font-semibold text-custom-grey-60">
            Select a Network
          </span>
        )}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8 9.5999L12 14.3999L7.19999 9.5999"
            stroke="#0040F7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border-2 border-custom-grey-30 rounded-md shadow-lg bg-custom-white">
          {networkProviders.map((provider) => (
            <li
              key={provider.name}
              onClick={() => handleSelect(provider)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
            >
              {/* <span className="">{provider.icon}</span> */}
              <img src={provider.icon} alt="" />
              <span className="text-sm font-semibold text-custom-grey-60">
                {provider.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
