import React from 'react';

const LoginForm = ({isVisable, visabilityCallback }) => {
    return (
        <div className={`${isVisable ? "hidden" : ""} shadow-lg rounded-md border-2 flex flex-col h-full w-full p-2 text-lg mx-auto max-w-lg`}> 
              <p className="text-2xl font-bold my-10 py-2 border-b-2 border-t-2 border-gray-700 w-2/3 sm:w-1/3 mx-auto"> VideoAPP </p>
              <p className="text-xl font-semibold py-2 w-2/3 sm:w-1/3 mx-auto"> LOGOWANIE </p>
              
              <label className="text-left ml-14"> Podaj email </label>
              <input className="focus:ring-2 focus:border-gray-500 focus:ring-gray-500 focus:outline-none placeholder-gray-300 py-1 font-semibold
              text-left bg-gray-200 text-black rounded-sm w-4/5 mr-auto sm:ml-12 ml-4 mt-1 pl-2 border-gray-400" type="text" placeholder="Email"></input>

              <label className="text-left ml-14 mt-10"> Podaj hasło </label>
              <input className="focus:ring-2 focus:border-gray-500 focus:ring-gray-500 focus:outline-none placeholder-gray-300 py-1 font-semibold
              text-left bg-gray-200 text-black rounded-sm w-4/5 mr-auto sm:ml-12 ml-4 mt-1 pl-2 border-gray-400" type="password" placeholder="Hasło"></input>

              <p className="mx-auto text-sm font-italic cursor-pointer hover:underline mt-2"> Przypomnij hasło </p>

              <button className="mt-10 border-4 rounded-md bg-gray-200 w-1/2 sm:w-1/4 mx-auto hover:bg-gray-400 hover:border-6 hover:border-gray-400 text-lg font-bold hover:text-white"> Zaloguj </button>


              <button onClick={ () => {visabilityCallback();}} className="mt-auto mb-4 mr-4 border-4 rounded-md bg-gray-200 w-2/3 sm:w-1/4 ml-auto hover:bg-gray-400 hover:border-6 hover:border-gray-400 text-lg font-bold hover:text-white"> Rejestracja </button>
          </div>
    );
};

export default LoginForm;