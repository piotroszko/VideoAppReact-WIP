import { Link } from "react-router-dom";
import React, { useState } from "react";

import RegistrationForm from "./forms/RegistrationForm";
import LoginForm from "./forms/LoginForm";
import ForgotForm from "./forms/ForgotForm";

const LoginPage = () => {
  const [isRegVisable, setIsRegVisable] = useState(false);
  const [isForgotVisable, setIsForgotVisable] = useState(false);
  return (
    <div className="grid grid-cols-1 grid-rows-6 h-screen">
      <div className="flex flex-col col-span-1 row-span-1 w-full h-full">
        <Link to="/" className="mb-auto mr-auto">
          <button className="ml-2 mt-2 p-3 hover:text-black text-white text-lg font-bold hover:bg-gray-200 bg-gray-400 hover:border-gray-200 rounded-md">
            {" "}
            Wróć{" "}
          </button>
        </Link>
      </div>
      <div className="flip row-span-4 row-start-2 w-full h-full">
        <div className="w-full h-full">
          <ForgotForm
            visabilityCallback={() => setIsForgotVisable(false)}
            isVisable={isForgotVisable}
          ></ForgotForm>
          <LoginForm
            visabilityCallback={() => setIsRegVisable(true)}
            forgotCallback={() => setIsForgotVisable(true)}
            isVisable={isRegVisable || isForgotVisable}
          ></LoginForm>
          <RegistrationForm
            visabilityCallback={() => setIsRegVisable(false)}
            isVisable={isRegVisable}
          ></RegistrationForm>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
