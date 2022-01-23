import React from "react";

const ForgotForm = ({ isVisable, visabilityCallback }) => {
  return (
    <div
      className={`${
        isVisable ? "" : "hidden"
      } shadow-lg rounded-md border-2 flex flex-col h-full w-full p-2 text-lg mx-auto max-w-lg dark:bg-gray-600 dark:text-gray-200`}>
      <p className="text-2xl font-bold my-10 py-2 border-b-2 border-t-2 border-gray-700 w-2/3 sm:w-1/3 mx-auto">
        {" "}
        VideoAPP{" "}
      </p>
      <p className="text-xl font-semibold py-2 w-2/3 sm:w-1/3 mx-auto">
        {" "}
        Przypomnij hasło{" "}
      </p>

      <label className="text-left ml-14">
        {" "}
        Podaj email na który zostanie wysłany email
      </label>
      <input
        className="focus:ring-2 focus:border-gray-500 focus:ring-gray-500 focus:outline-none placeholder-gray-300 py-1 font-semibold
              text-left bg-gray-200 text-black rounded-sm w-4/5 mr-auto sm:ml-12 ml-4 mt-1 pl-2 border-gray-400 dark:bg-gray-700 dark:text-gray-200"
        type="text"
        placeholder="Adres e-mail"></input>

      <button className="mt-10 border-4 rounded-md bg-gray-200 w-1/2 sm:w-1/4 mx-auto hover:bg-gray-400 hover:border-6 dark:bg-gray-700 dark:text-gray-200 hover:border-gray-400 text-lg font-bold hover:text-white">
        {" "}
        Wyślij{" "}
      </button>

      <button
        onClick={() => {
          visabilityCallback();
        }}
        className="mt-auto mb-4 mr-4 border-4 rounded-md bg-gray-200 w-2/3 sm:w-1/4 ml-auto hover:bg-gray-400 hover:border-6 dark:bg-gray-700 dark:text-gray-200 hover:border-gray-400 text-lg font-bold hover:text-white">
        {" "}
        Wróć{" "}
      </button>
    </div>
  );
};

export default ForgotForm;
