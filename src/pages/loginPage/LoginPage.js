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
      <div className="col-span-1 row-span-1 h-full w-full flex flex-col">
        <Link to="/" className="mr-auto mb-auto">
          <button className="bg-gray-400 p-3 text-lg rounded-md text-white font-bold ml-2 mt-2 hover:bg-gray-200 hover:border-gray-200 hover:text-black"> Wróć </button>
        </Link>
      </div>
      <div className=" w-full h-full row-span-4 row-start-2 flip">
        <div className="h-full w-full">
          <ForgotForm visabilityCallback={() => setIsForgotVisable(false)} isVisable={isForgotVisable}></ForgotForm>
          <LoginForm visabilityCallback={() => setIsRegVisable(true)} forgotCallback={ () => setIsForgotVisable(true)} isVisable={isRegVisable || isForgotVisable}></LoginForm>
          <RegistrationForm visabilityCallback={() => setIsRegVisable(false)} isVisable={isRegVisable}></RegistrationForm>
        </div>
      </div>
    </div>
    );
  }
export default LoginPage;