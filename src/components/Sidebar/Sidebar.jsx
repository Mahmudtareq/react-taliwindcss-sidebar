import { useState } from "react";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsSearch,
  BsImageFill,
  BsReverseLayoutTextWindowReverse,
  BsGraphUp,
  BsInboxFill,
  BsPersonFill,
} from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";

import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const menuItems = [
    { title: "Dashboard", link: "/", icon: <BiSolidDashboard /> },
    { title: "Pages", link: "/page", icon: <AiOutlineFileText /> },
    { title: "Media", link: "/media", spacing: true, icon: <BsImageFill /> },
    {
      title: "Projects",
      submenu: true,
      icon: <BsReverseLayoutTextWindowReverse />,
      submenuItems: [
        { title: "Projects 1", link: "/" },
        { title: "Projects 2", link: "/" },
        { title: "Projects 3", link: "/" },
      ],
    },
    { title: "Analytics", link: "/page", icon: <BsGraphUp /> },
    { title: "Inbox", link: "/page", icon: <BsInboxFill /> },
    { title: "Profile", link: "/page", spacing: true, icon: <BsPersonFill /> },
    { title: "Logout", link: "/page", icon: <LuLogOut /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple min-h-screen  p-5 pt-8  ${
          open ? "w-72" : "w-20"
        } relative duration-300`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full cursor-pointer -right-3 top-9 border border-[#155e75] absolute ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center">
          <AiFillAppstore
            className={`bg-amber-300 text-3xl rounded cursor-pointer block float-left duration-500 mr-2 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-500 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-[#596c86] mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-2xl block float-left cursor-pointer ${
              open && "mr-2 text-lg"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base w-full bg-transparent  text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <div>
          <ul className="pt-2">
            {menuItems.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#596c86] rounded-md  ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <BiSolidDashboard />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, idx) => (
                      <li
                        className="text-gray-300 text-sm flex items-center gap-x-4 px-4 cursor-pointer p-2 hover:bg-[#596c86] rounded-md "
                        key={idx}
                      >
                        <span className="text-2xl block float-left">
                          <BiSolidDashboard />
                        </span>
                        <span className="text-base font-medium flex-1">
                          {submenuItem.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
    </div>
  );
};

export default Sidebar;
