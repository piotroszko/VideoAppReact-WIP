import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { t } from "i18next";

const DropdownInput = (props) => {
  const [selected, setSelected] = useState(props.default);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setDropdownVisible(false),
  });

  return (
    <div className="flex flex-col items-end justify-end mx-auto h-full">
      <div className="relative" ref={ref}>
        <input type="checkbox" className="absolute hidden" />
        <label
          htmlFor="sortbox"
          className="flex items-center justify-center focus:bg-white cursor-pointer select-none space-x-1"
        >
          <span
            className="text-medium p-2 dark:text-gray-200 border-2 border-gray-700 rounded-lg"
            onClick={() =>
              !dropdownVisible ? setDropdownVisible(true) : setDropdownVisible(false)
            }
          >
            {selected && (
              <div className="flex flex-row gap-1">{props.translate ? t(selected) : selected}</div>
            )}
          </span>
        </label>
        <div
          className={`${
            dropdownVisible ? "opacity-1" : "hidden opacity-0"
          } absolute z-50 right-1 top-full mt-1 min-w-max bg-gray-300 border rounded shadow  transition delay-75 ease-in-out`}
        >
          <ul className="z-50 block text-right text-gray-900">
            {props.options.map((opt) => (
              <li key={opt}>
                <button
                  className="z-50 block px-2 py-1 w-full hover:bg-gray-200"
                  onClick={() => {
                    setSelected(opt);
                    setDropdownVisible(false);
                    props.publicityChange(opt);
                  }}
                >
                  <div className="flex flex-row gap-1">{props.translate ? t(opt) : opt}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownInput;
