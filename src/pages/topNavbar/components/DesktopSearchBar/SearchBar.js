import React, { useState, useRef } from "react";
import { t } from "i18next";
import axios from "axios";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useNavigate } from "react-router-dom";
import urls from "./../../../../api/auth-ep";

const SearchBar = ({ onSearch, darkmode, result }) => {
  let navigate = useNavigate();
  const searchInput = useRef(null);
  const suggestsRef = useRef([]);
  const [inputText, setInputText] = useState("");
  const [suggestedValues, setSuggestedValues] = useState([]);
  const [suggestionVisible, setSuggestionVisible] = useState(false);
  const handleInput = (text) => {
    setInputText(text);
    if (text.length > 0 && text.replace(/\s/g, "").length) {
      axios.get(urls.searchSuggest + text.trim()).then((data) => {
        setSuggestedValues(data.data);
      });
    }
  };
  const handleKey = (e, index) => {
    if (e.key === "ArrowDown" && suggestsRef.current.length > 0) {
      if (index === -1 && suggestedValues.length > 0) {
        suggestsRef.current[0].focus();
      } else if (suggestedValues.length > index + 1) {
        suggestsRef.current[index + 1].focus();
      }
    } else if (e.key === "ArrowUp" && suggestsRef.current.length > 0) {
      if (index - 1 > -1) {
        suggestsRef.current[index - 1].focus();
      } else {
        searchInput.current.focus();
        setTimeout(() => {
          searchInput.current.setSelectionRange(inputText.length, inputText.length);
        }, 0);
      }
    }
  };

  const ref = useDetectClickOutside({
    onTriggered: () => setSuggestionVisible(false),
  });
  return (
    <>
      <div className="relative flex items-center justify-start w-64" ref={ref}>
        <input
          value={inputText}
          onInput={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") {
              handleKey(e, -1);
            } else {
              if (inputText !== "") navigate("/search/" + inputText, { replace: true });
            }
          }}
          onFocus={() => {
            setSuggestionVisible(true);
          }}
          className="placeholder-gray-600 dark:placeholder-gray-100 pl-10 py-3 w-full dark:text-gray-200 text-gray-600 text-sm leading-none bg-gray-100 dark:bg-gray-400 rounded focus:outline-none"
          type="text"
          placeholder={t("search")}
          ref={searchInput}
        />
        <svg
          className="absolute left-3 cursor-pointer"
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
            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3
                    10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
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
      </div>
      <div
        id="popup"
        className={`${
          inputText !== "" && suggestedValues.length > 0 && suggestionVisible
            ? "z-30 "
            : "z-0 opacity-0"
        } ease-in-out transition duration-100 bg-white
                top-12 left-12 absolute  w-64 shadow border rounded border-gray-200 py-3  flex justify-center items-start flex-col`}
      >
        {Object.prototype.toString.call(suggestedValues) === "[object Array]"
          ? suggestedValues.map((s, index) => (
              <button
                key={s.id}
                ref={(el) => {
                  return (suggestsRef.current[index] = el);
                }}
                onClick={() => setInputText(s.name)}
                onKeyDown={(e) => handleKey(e, index)}
                className="flex items-center justify-start mt-2 p-2 w-full hover:bg-gray-50 rounded space-x-2"
              >
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="text-md text-left text-gray-800 font-bold leading-3">{s.name}</p>
                </div>
              </button>
            ))
          : ""}
      </div>
    </>
  );
};

export default SearchBar;
