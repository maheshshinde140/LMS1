import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import Cookie from "js-cookie";

const AdminNavbar = () => {
  const user = localStorage.getItem("persist:root");
  console.log(user.split(",")[1].includes(true));

  function logout() {
    Cookie.remove("adminToken");
  }
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="flex  ">
        <FaSearch className="text-gray-600 mr-5  mt-3" />
        <input
          type="text"
          placeholder="Search..."
          className=" shadow-md border-gray-300 rounded p-2 w-96"
        />
      </div>

      <div className="flex items-center gap-10">
        <span className="flex">
          <FaUserCircle className="text-gray-600 mr-2" size={24} />
          <span className="text-gray-600">Admin Name</span>
        </span>
        <span>
          {user.split(",")[1].includes(true) ? (
            <button onClick={() =>  Cookie.remove("adminToken")}>Sign out</button>
          ) : null}
        </span>
      </div>
    </nav>
  );
};

export default AdminNavbar;
