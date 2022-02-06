import React from "react";
import { Link } from "react-router-dom";

import SubsPage from "../../../subscribersPage/SubsPage";
import { useAuth } from "../../../../utils";

const DesktopCategories = () => {
  const auth = useAuth();
  return (
    <div className="flex items-center justify-center w-full space-x-4">
      <button className="btn-navbar">
        <p className="text-btn-navbar">TOP</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">NOWOŚCI</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">ODKRYJ</p>
      </button>
      <Link to="/subs" component={<SubsPage />}>
        <button className={`${auth.isLogin ? "" : "hidden"} btn-navbar`}>
          <p className="text-btn-navbar">SUBSKRYPCJE</p>
        </button>
      </Link>
    </div>
  );
};

export default DesktopCategories;
