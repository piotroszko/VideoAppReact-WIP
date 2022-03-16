import React, { useState, useContext } from "react";
import { t } from "i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import urls from "./../../../../api/auth-ep";
import { DarkmodeContext } from "../../../../utils/DarkmodeProvider";
import "./MobileSearchBar.css";

const MobileSearchBar = ({ search, closeSearch }) => {
  const darkmode = useContext(DarkmodeContext);
  let navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [suggestedValues, setSuggestedValues] = useState([]);
  const handleInput = (text) => {
    setInputText(text);
    if (text.length > 0 && text.replace(/\s/g, "").length) {
      axios.get(urls.searchSuggest + text.trim()).then((data) => {
        setSuggestedValues(data.data);
      });
    }
  };
  return (
    <div
      id="searchItemsSecond"
      className={`${search ? "" : "hidden"} w-full flex z-10 justify-between items-center`}
    >
      <div className="relative flex items-center justify-start mr-4 w-full md:mr-16">
        <input
          value={inputText}
          onInput={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (inputText !== "") navigate("/search/" + inputText, { replace: true });
            }
          }}
          className="dark:placeholder-gray-200 placeholder-gray-600 pl-10 py-3 w-full dark:text-gray-200 text-gray-600 text-sm leading-none bg-gray-100 dark:bg-gray-600 rounded focus:outline-none"
          type="text"
          placeholder={t("search")}
        />
        <svg
          className="absolute left-2 cursor-pointer"
          width={24}
          height={24}
          onClick={() => {
            if (inputText !== "") navigate("/search/" + inputText, { replace: true });
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401
                                 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
            stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L15 15"
            stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          id="popup2"
          className={`${
            inputText === "" || suggestedValues.length === 0 ? "hidden" : ""
          } ease-in-out transition duration-500 bg-white top-12 absolute w-full shadow border rounded border-gray-200 py-1 flex justify-center items-start flex-col`}
        >
          {Object.prototype.toString.call(suggestedValues) === "[object Array]"
            ? suggestedValues.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setInputText(s.name);
                    closeSearch();

                    if (inputText !== "") {
                      setTimeout(() => {
                        navigate("/search/" + inputText, { replace: true });
                      }, 100);
                    }
                  }}
                  className="z-100 flex items-center justify-start mt-2 p-3 w-full hover:bg-gray-50 rounded space-x-2"
                >
                  <div className="flex flex-col items-start justify-start space-y-1">
                    <p className="text-left text-gray-800 text-xl font-bold leading-3">{s.name}</p>
                  </div>
                </button>
              ))
            : ""}
        </div>
      </div>

      <button onClick={() => closeSearch()} className="focus:outline-none" aria-label="toggler">
        <svg
          id="navOpen"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileSearchBar;
