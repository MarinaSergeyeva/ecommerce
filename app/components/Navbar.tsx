"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronRight, ShoppingBasket } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Dropdown from "./Dropdown";

export interface MenuItem {
  name: string;
  href: string;
  subLinks?: MenuItem[];
}

const links: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Men", href: "/products/Men" },
      { name: "Women", href: "/products/Women" },
      { name: "Teens", href: "/products/Teens" },
    ],
  },
  { name: "Our Team", href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  const [isHovered, setIsHovered] = useState(false);
  const handleInteraction = (event: any) => {
    setIsHovered(event.type === "mouseenter" || event.type === "focus");
  };

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next
            <span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          <ul className="flex gap-6">
            {links.map((link, index) => (
              <li key={index}>
                {link?.subLinks ? (
                  <Dropdown item={link} />
                ) : (
                  <Link
                    className={`text-lg font-semibold ${
                      pathname === link.href ? "text-primary" : "text-gray-600"
                    } transition duration-100 hover:text-primary flex items-center gap-2`}
                    href={link.href}
                    onMouseEnter={handleInteraction}
                    onMouseLeave={handleInteraction}
                    onFocus={handleInteraction}>
                    {link.name}
                  </Link>
                )}
                {/* {link?.subLinks && isHovered && (
                  <ul className="flex flex-col gap-4 absolute t-0 mt-2 ml-2 p-4 bg-white shadow-lg rounded-md">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        {pathname === subLink.href ? (
                          <Link
                            href={subLink.href}
                            className="text-lg font-semibold text-primary">
                            {subLink.name}
                          </Link>
                        ) : (
                          <Link
                            href={subLink.href}
                            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                            {subLink.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            onClick={() => handleCartClick()}>
            <ShoppingBasket />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
