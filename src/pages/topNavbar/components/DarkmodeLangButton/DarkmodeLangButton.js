import React, { useContext, useState, useEffect } from "react";
import { t } from "i18next";
import { useDetectClickOutside } from "react-detect-click-outside";
import i18n from "i18next";

import { DarkmodeContext } from "../../../../utils/DarkmodeProvider";
import "./DarkmodeLangButton.css";
import plFLAG from "./pl.svg";
import engFLAG from "./gb.svg";

const DarkmodeLangButton = () => {
  const [lang, setLang] = useState("ENG");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const themeMode = useContext(DarkmodeContext);

  const theme = () => {
    document.documentElement.classList.toggle("dark");
    themeMode.changeMode();
  };
  const ref = useDetectClickOutside({
    onTriggered: () => setDropdownVisible(false),
  });
  const changeLang = (lang) => {
    if (lang === "PL") {
      setLang(t("PL"));
      localStorage.setItem("lang", "PL");
      i18n.changeLanguage("pl");
      window.location.reload(false);
    } else if (lang === "ENG") {
      setLang(t("ENG"));
      localStorage.setItem("lang", "ENG");
      i18n.changeLanguage("en");
      window.location.reload(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("lang") !== null) {
      let tmpLang = localStorage.getItem("lang");
      if (tmpLang === "PL") {
        setLang(t("PL"));
        i18n.changeLanguage("pl");
      } else if (tmpLang === "ENG") {
        setLang(t("ENG"));
        i18n.changeLanguage("en");
      }
    } else {
      setLang(t("ENG"));
      i18n.changeLanguage("en");
    }
  });
  return (
    <>
      <div className="flex flex-col items-end justify-end ml-auto my-auto h-full">
        <div className="relative" ref={ref}>
          <input type="checkbox" className="absolute hidden" />
          <label
            htmlFor="sortbox"
            className="flex items-center justify-center focus:bg-gray-500 cursor-pointer select-none space-x-1"
          >
            <span
              className="text-medium dark:text-gray-200"
              onClick={() =>
                !dropdownVisible ? setDropdownVisible(true) : setDropdownVisible(false)
              }
            >
              {lang === "PL" && (
                <div className="flex flex-row gap-1">
                  <img src={plFLAG} alt="" className="w-6 h-6"></img> PL
                </div>
              )}
              {lang === "ENG" && (
                <div className="flex flex-row gap-1">
                  <img src={engFLAG} alt="" className="w-6 h-6"></img> ENG
                </div>
              )}
            </span>
          </label>
          <div
            className={`${
              dropdownVisible ? "opacity-1" : "hidden opacity-0"
            } absolute z-50 right-1 top-full mt-1 min-w-max bg-gray-300 border rounded shadow  transition delay-75 ease-in-out`}
          >
            <ul className="z-50 block text-right text-gray-900">
              <li>
                <button
                  className="z-50 block px-2 py-1 w-full hover:bg-gray-200"
                  onClick={() => changeLang("PL")}
                >
                  <div className="flex flex-row gap-1">
                    <img src={plFLAG} alt="" className="w-6 h-6"></img> PL
                  </div>
                </button>
              </li>
              <li>
                <button
                  className="z-50 block px-3 py-2 w-full hover:bg-gray-200"
                  onClick={() => changeLang("ENG")}
                >
                  <div className="flex flex-row gap-1">
                    <img src={engFLAG} alt="" className="w-6 h-6"></img> ENG
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        title="Toggle Theme"
        onClick={() => theme()}
        className={`${
          themeMode.isDarkmode
            ? "focus:ring-blue-600 bg-gray-600"
            : "focus:ring-blue-700 bg-gray-300"
        } w-12 h-6 rounded-full p-1 relative transition-colors duration-500 
        my-auto ml-auto mr-3 ease-infocus:outline-none focus:border-transparent`}
      >
        <div
          id="toggle"
          className={`${
            themeMode.isDarkmode ? " ml-auto" : ""
          } rounded-full w-4 h-4 bg-white pointer-events-none 
                transition-all duration-300 ease-out`}
        ></div>
      </button>
    </>
  );
};

export default DarkmodeLangButton;
