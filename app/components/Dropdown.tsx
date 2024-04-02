"use client";

import React, { useState } from "react";
import { MenuItem } from "./Navbar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Dropdown = (props: { item: MenuItem }) => {
  const { item } = props;
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = item?.subLinks ? item.subLinks : [];

  return (
    <>
      <div>
        <div className="flex items-center gap-2 group">
          <Link
            href={item.href}
            onClick={toggleDropdown}
            className={`text-lg font-semibold ${
              pathname === item.href || isOpen
                ? "text-primary"
                : "text-gray-600"
            } group-hover:text-primary active:text-primary transition duration-300 relative`}>
            {item.name}
          </Link>
          <span>
            <ChevronRight
              className={`${
                pathname === item.href || isOpen
                  ? "text-primary hover:text-primary active:text-primary rotate-90"
                  : "text-gray-600"
              } group-hover:text-primary active:text-primary group-hover:rotate-90 hover:cursor-pointer transition duration-300`}
            />
          </span>
        </div>

        <div
          className={`absolute top-16 z-20 w-[300] flex flex-col p-6 bg-white rounded-md ${
            isOpen ? "flex gap-2 bg-gray-100" : "hidden"
          }`}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleDropdown}
              className="text-md text-gray-600 hover:text-primary active:text-primary">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-10"
          onClick={toggleDropdown}></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dropdown;
