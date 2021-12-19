import React, { useState, useRef } from "react";

const LoginButtonMobile = () => {
    return (
        <div className="mt-auto w-full flex justify-end">
        <button className="p-3 focus:outline-none rounded text-xs font-medium leading-3 w-full
        text-blue-700 bg-blue-50 focus:bg-blue-700 focus:text-white">Zaloguj</button>
    </div>
    );
}

export default LoginButtonMobile;