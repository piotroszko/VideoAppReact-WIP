import React from 'react';

const MainProfile = () => {
    return (
        <div className="w-full pt-16 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col h-full order-2 md:order-1">
             <div className="w-full text-center flex flex-col">
                <p className="text-xl font-bold mt-4"> Twoje konto </p>
                <div className="mx-auto mt-20 w-full flex flex-row justify-center">
                    <input type="checkbox" value="bananas" className="h-5 w-5 my-auto"/>
                    <label className="ml-1 text-center my-auto text-lg w-3/4 h-full font-bold"> Chcesz dostawać powiadomienia email o nowych filmach z subskrybowanych kanałów? </label>
                </div>

                <div className="mx-auto mt-4 w-full flex flex-row justify-center">
                    <input type="checkbox" value="bananas" className="h-5 w-5 my-auto"/>
                    <label className="ml-1 text-center my-auto text-lg w-3/4 h-full font-bold"> Chcesz dostawać powiadomienia email, gdy ktoś polubi twój komentarz? </label>
                </div>


                <p className="pt-20 mt-5 text-lg font-bold"> Zmiana hasła</p>

                <label className="text-center mt-10"> Podaj stare hasło </label>
                <input
                    value={null}
                    onInput={null}
                    className="pl-2 mt-2 mx-auto w-1/2 focus:ring-2 focus:border-gray-500 focus:ring-gray-500 focus:outline-none placeholder-gray-300 py-1 font-semibold
                        text-left bg-gray-200 text-black rounded-sm border-gray-400 dark:bg-gray-700 dark:text-gray-200"
                    type="password"
                    placeholder="Podaj stare hasło"></input>

                <label className="text-center mt-10"> Podaj nowe hasło </label>
                <input
                    value={null}
                    onInput={null}
                    className="pl-2 mt-2 mx-auto w-1/2 focus:ring-2 focus:border-gray-500 focus:ring-gray-500 focus:outline-none placeholder-gray-300 py-1 font-semibold
                        text-left bg-gray-200 text-black rounded-sm border-gray-400 dark:bg-gray-700 dark:text-gray-200"
                    type="password"
                    placeholder="Podaj nowe hasło"></input>
                <label className="text-center mt-2"> Powtórz nowe hasło </label>
                <input
                    value={null}
                    onInput={null}
                    className="pl-2 mt-2 mx-auto w-1/2 focus:ring-2 focus:border-gray-500 focus:ring-gray-500 focus:outline-none placeholder-gray-300 py-1 font-semibold
                        text-left bg-gray-200 text-black rounded-sm border-gray-400 dark:bg-gray-700 dark:text-gray-200"
                    type="password"
                    placeholder="Powtórz nowe hasło"></input>
                <button className="mx-auto mt-4 border-4 rounded-md bg-gray-200 w-2/3 dark:bg-gray-700 dark:text-gray-200 sm:w-1/4 hover:bg-gray-400 hover:border-6 hover:border-gray-400 text-lg font-bold hover:text-white"> Zmień hasło </button>
                <div className="h-full justify-end mt-auto"></div>
             </div>
            </div>
            <div className="w-full md:w-1/2 md:order-2 flex flex-col pt-4">
                <p className="text-lg font-bold mb-8"> Zmiana zdjecia profilowego </p>

                <p className="font-bold"> Aktualne zdjecie </p>
                <img
                    alt=""
                    className="block mx-auto rounded-2xl w-1/3 mt-2"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                />


                <p className="font-bold mt-14"> Wybierz nowe zdjecie </p>
                <input type="file" className="mx-auto mt-4 mb-4"></input>

                <p className="italic mt-4"> Podgląd </p>
                <img
                    alt=""
                    className="block mx-auto rounded-2xl w-1/3 mt-2"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                />
                <button className="mx-auto mt-6 border-4 rounded-md bg-gray-200 w-2/3 dark:bg-gray-700
                 dark:text-gray-200 sm:w-1/4 hover:bg-gray-400 hover:border-6 hover:border-gray-400 text-lg font-bold hover:text-white">
                     Zapisz </button>
            </div>
        </div>
    );
};

export default MainProfile;