import React from 'react';
import { CustomButton } from '../Button';
import { useState } from 'react';

const InputField = ({ label, id, type, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className=" text-base font-normal text-custom-grey-70 mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border-2 border-custom-grey-30 rounded-md shadow-sm focus:outline-none placeholder-placeholder-blue"
    />
  </div>
);

export const ChangePassword = () => {
    const [activeTab, setActiveTab] = useState('password');

    const renderForm = () => {
      if (activeTab === 'password') {
        return (
          <>
            <InputField
              label="Current Password"
              id="currentPassword"
              type="password"
              placeholder="Enter Current Password"
            />
            <InputField
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="Enter New Password"
            />
            <InputField
              label="Confirm New Password"
              id="confirmPassword"
              type="password"
              placeholder="Enter New Password"
            />
          </>
        );
      } else {
        return (
          <>
            <InputField
              label="Current PIN"
              id="currentPIN"
              type="password"
              placeholder="Enter Current PIN"
            />
            <InputField
              label="New PIN"
              id="newPIN"
              type="password"
              placeholder="Enter New PIN"
            />
            <InputField
              label="Confirm New PIN"
              id="confirmPIN"
              type="password"
              placeholder="Enter New PIN"
            />
          </>
        );
      }
    };
  
    return (
      <div className="w-full lg:w-2/5 bg-custom-white  overflow-hidden">
        <div className="flex gap-3 p-2 rounded-full border-2 border-custom-grey-30">
          <div
            className={` w-1/2 rounded-full flex-1 text-center py-2 cursor-pointer font-semibold text-sm text-custom-grey-70 ${
              activeTab === 'password'
                ? 'bg-custom-faint-white'
                : 'bg-custom-faint-white opacity-50'
            }`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </div>
          <div
            className={` w-1/2 rounded-full flex-1 text-center py-2 cursor-pointer font-semibold text-sm text-custom-grey-70 ${
              activeTab === 'pin'
                ? 'bg-custom-faint-white'
                : 'bg-custom-faint-white opacity-50'
            }`}
            onClick={() => setActiveTab('pin')}
          >
            Change PIN
          </div>
        </div>
        <div className="mt-8 p-4 rounded-2xl border-2 border-custom-grey-30">
          <form>
            {renderForm()}
            <CustomButton type="submit"className={'w-full bg-custom-primary-blue mt-5 py-4 px-12 text-custom-white text-base font-semibold rounded-lg opacity-40 hover:opacity-100'}>
              Submit
            </CustomButton>
          </form>
        </div>
      </div>
    );
};
