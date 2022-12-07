import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

function AccountSettingBody({ selected, setSelected, updateHandler }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    { name: "General", path: "general" },
    { name: "Edit Profile", path: "edit" },
    { name: "Password", path: "password" },
    { name: "Social Profiles", path: "social" },
  ];

  return (
    <main className="sm:grid sm:grid-cols-[150px_1fr] sm:gap-x-8 px-5 sm:px-10 text-[#777777]  ">
      <h2 className="hidden sm:block col-span-2 text-4xl my-16 font-semibold">
        {selected}
      </h2>
      <div className="hidden sm:flex flex-col">
        <Link
          to="general"
          tabIndex="0"
          className="cursor-pointer py-2 focus:font-semibold"
          onClick={(e) => {
            setSelected("General");
          }}
        >
          General
        </Link>
        <Link
          to="edit"
          tabIndex="0"
          className="cursor-pointer py-2 focus:font-semibold"
          onClick={(e) => {
            setSelected("Edit Profile");
          }}
        >
          Edit Profile
        </Link>
        <Link
          to="password"
          tabIndex="0"
          className="cursor-pointer py-2 focus:font-semibold"
          onClick={(e) => {
            setSelected("Password");
          }}
        >
          Password
        </Link>
        <Link
          to="social"
          tabIndex="0"
          className="cursor-pointer py-2 focus:font-semibold"
          onClick={(e) => {
            setSelected("Social Profiles");
          }}
        >
          Social Profiles
        </Link>
      </div>

      <button
        className="sm:hidden flex justify-between border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-3 px-4 w-full mt-20"
        onClick={(e) => setIsActive(!isActive)}
      >
        {<h2 className="leading-none">{selected}</h2>}
        <BsChevronDown />
      </button>
      {isActive && (
        <div>
          {options.map((option) => (
            <div
              key={option.path.toString()}
              className="top-[110%] p-[15px] border-[#A5A5A5] rounded-lg"
              onClick={(e) => {
                setSelected(option.name);
                setIsActive(false);
              }}
            >
              <div>
                <Link
                  key={option.path.toString()}
                  to={option.path}
                  className="py-2 hover:bg-slate-50 rounded-md duration-200 cursor-pointer"
                >
                  {option.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </main>
  );
}

export default AccountSettingBody;
