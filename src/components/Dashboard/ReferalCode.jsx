import { useState } from "react";
import { CustomButton } from "../Button";
import { toast } from "react-toastify";

export const ReferralCode = () => {
  const [referralCode, setreferralCode] = useState("18/52ha089");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    toast('Referral code Copied')
  };

  const handleEdit = () => {
    setIsEditing(true);
  };


  return (
    <div className="rounded-2xl border-2 border-custom-grey-30 w-full p-6">
      <p className="text-base font-normal text-custom-grey-90 font-sans mb-4">
        Referral
      </p>
      <div className=" flex items-center gap-2">
        <p className="text-base font-normal text-custom-grey-90 font-sans">
          Referral Code:
        </p>
        <h6 className="font-sans font-semibold text-base text-custom-grey-90">
          {referralCode}
        </h6>
      </div>
      <div className="mt-5 flex items-center gap-5">
        <div className="flex items-center gap-1">
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
        <div className="flex items-center gap-1">
          <CustomButton onClick={handleEdit} className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 16.5514H16.8M1.20007 16.5514L5.56606 15.6717C5.79784 15.625 6.01065 15.5109 6.17779 15.3437L15.9515 5.56461C16.4201 5.09576 16.4197 4.33577 15.9508 3.86731L13.8803 1.79923C13.4115 1.33097 12.6519 1.33129 12.1835 1.79995L2.40884 11.58C2.24202 11.7469 2.12812 11.9593 2.08138 12.1906L1.20007 16.5514Z"
                stroke="#4169E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </CustomButton>
          <p className="font-semibold text-base text-custom-primary-blue">
            Edit
          </p>
        </div>
        <div className="flex items-center gap-1">
          <CustomButton onClick={handleCopy} className="flex items-center">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0001 7.45912L9.40007 1.1001L9.40007 4.7001C0.999878 6.5001 0.999878 14.9001 0.999878 14.9001C0.999878 14.9001 4.59988 10.1001 9.40007 10.7001L9.40007 14.4201L19.0001 7.45912Z"
                stroke="#4169E1"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </CustomButton>
          <p className="font-semibold text-base text-custom-primary-blue">
            Share
          </p>
        </div>
      </div>
    </div>
  );
};
