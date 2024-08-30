import { CustomButton } from "../Button";
import { toast } from "react-toastify";
import { useState } from "react";

export const UserDetails = () => {
    const [referralLink, setreferralLink] = useState("www.subsum.com/tre/wd...")

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        toast('Referral Link Copied')
      };


  return (
    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl border-2 border-custom-grey-30 w-full">
      <div className=" flex flex-col md:flex-row  lg:flex-row lg:items-center justify-between w-full">
        <p className="text-base font-normal text-custom-grey-70 font-sans">
          Name
        </p>
        <h6 className="font-sans font-semibold text-base text-custom-grey-70">
          Lawal Wahab Babatunde
        </h6>
      </div>
      <div className=" flex flex-col md:flex-row lg:flex-row lg:items-center justify-between w-full">
        <p className="text-base font-normal text-custom-grey-70 font-sans">
          Email
        </p>
        <h6 className="font-sans font-semibold text-base text-custom-grey-70">
          wabdot@gmail.com
        </h6>
      </div>
      <div className="flex flex-col md:flex-row  lg:flex-row lg:items-center justify-between w-full">
        <p className="text-base font-normal text-custom-grey-70 font-sans">
          Phone Number
        </p>
        <h6 className="font-sans font-semibold text-base text-custom-grey-70">
        0906 856 2949
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
        <p className="text-base font-normal text-custom-grey-70 font-sans">
          Account Status
        </p>
        <h6 className="font-sans font-semibold text-base text-custom-grey-70">
          Active
        </h6>
      </div>
      <div className="flex flex-col md:flex-row  lg:flex-row lg:items-center justify-between w-full">
        <p className="text-base font-normal text-custom-grey-70 font-sans">
          Referral Link
        </p>
        <h6 className="font-sans font-semibold text-base text-custom-grey-70">
        "{referralLink}
        </h6>
      </div>
      <div className="flex items-center self-end gap-1">
          <CustomButton onClick={handleCopy} className="flex items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99997 13.4001L2.59997 13.4001C1.93723 13.4001 1.39997 12.8628 1.39997 12.2001L1.39997 3.4001C1.39997 2.29553 2.29541 1.4001 3.39997 1.4001L12.2 1.4001C12.8627 1.4001 13.4 1.93736 13.4 2.6001L13.4 5.0001M11 20.6001L18.2 20.6001C19.5255 20.6001 20.6 19.5256 20.6 18.2001L20.6 11.0001C20.6 9.67462 19.5255 8.6001 18.2 8.6001L11 8.6001C9.67449 8.6001 8.59997 9.67462 8.59997 11.0001L8.59997 18.2001C8.59997 19.5256 9.67449 20.6001 11 20.6001Z"
                stroke="#4169E1"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </CustomButton>
          <p onClick={handleCopy} className="font-semibold text-base text-custom-primary-blue cursor-pointer">
            Copy
          </p>
        </div>
      <p className="font-semibold text-base text-custom-primary-blue self-start">
          Edit
        </p>
    </div>
  );
};
