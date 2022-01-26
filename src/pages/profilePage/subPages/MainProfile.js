import React from "react";

const MainProfile = () => {
  return (
    <div className="flex flex-col pt-16 w-full md:flex-row">
      <div className="flex flex-col order-2 w-full h-full md:order-1 md:w-1/2">
        <div className="flex flex-col w-full text-center">
          <p className="mt-4 text-xl font-bold"> Twoje konto </p>
          <div className="flex flex-row justify-center mt-20 mx-auto w-full">
            <input type="checkbox" value="bananas" className="my-auto w-5 h-5" />
            <label className="ml-1 my-auto w-3/4 h-full text-center text-lg font-bold">
              {" "}
              Chcesz dostawać powiadomienia email o nowych filmach z subskrybowanych kanałów?{" "}
            </label>
          </div>

          <div className="flex flex-row justify-center mt-4 mx-auto w-full">
            <input type="checkbox" value="bananas" className="my-auto w-5 h-5" />
            <label className="ml-1 my-auto w-3/4 h-full text-center text-lg font-bold">
              {" "}
              Chcesz dostawać powiadomienia email, gdy ktoś polubi twój komentarz?{" "}
            </label>
          </div>

          <p className="mt-5 pt-20 text-lg font-bold"> Zmiana hasła</p>

          <label className="mt-10 text-center"> Podaj stare hasło </label>
          <input
            value={null}
            onInput={null}
            className="placeholder-gray-300 mt-2 mx-auto pl-2 py-1 w-1/2 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder="Podaj stare hasło"
          ></input>

          <label className="mt-10 text-center"> Podaj nowe hasło </label>
          <input
            value={null}
            onInput={null}
            className="placeholder-gray-300 mt-2 mx-auto pl-2 py-1 w-1/2 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder="Podaj nowe hasło"
          ></input>
          <label className="mt-2 text-center"> Powtórz nowe hasło </label>
          <input
            value={null}
            onInput={null}
            className="placeholder-gray-300 mt-2 mx-auto pl-2 py-1 w-1/2 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder="Powtórz nowe hasło"
          ></input>
          <button className="hover:border-6 mt-4 mx-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4">
            {" "}
            Zmień hasło{" "}
          </button>
          <div className="justify-end mt-auto h-full"></div>
        </div>
      </div>
      <div className="flex flex-col pt-4 w-full md:order-2 md:w-1/2">
        <p className="mb-8 text-lg font-bold"> Zmiana zdjecia profilowego </p>

        <p className="font-bold"> Aktualne zdjecie </p>
        <img
          alt=""
          className="block mt-2 mx-auto w-1/3 rounded-2xl"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        />

        <p className="mt-14 font-bold"> Wybierz nowe zdjecie </p>
        <input type="file" className="mb-4 mt-4 mx-auto"></input>

        <p className="mt-4 italic"> Podgląd </p>
        <img
          alt=""
          className="block mt-2 mx-auto w-1/3 rounded-2xl"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        />
        <button className="hover:border-6 mt-6 mx-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4">
          Zapisz{" "}
        </button>
      </div>
    </div>
  );
};

export default MainProfile;
