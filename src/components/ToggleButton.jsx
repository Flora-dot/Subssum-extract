import { useState } from "react";

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    const toggleSwitch = () => setIsToggled(!isToggled);
  
    return (
        <div
          className={`w-14 h-6 flex items-center rounded-full p-1 cursor-pointer ${
            isToggled ? 'bg-custom-primary-blue' : 'bg-custom-grey-100'
          }`}
          onClick={toggleSwitch}
        >
          <div
            className={`bg-custom-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              isToggled ? 'translate-x-6' : ''
            }`}
          ></div>
        </div>
    );
  };
  
  export default ToggleButton