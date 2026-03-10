"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./style.css";

// Define an interface for the links data structure
interface LinkItem {
  id: number;
  url: string;
  text: string;
}

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksDivRef = useRef<HTMLDivElement>(null);
  const linksListRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (linksListRef.current && linksDivRef.current) {
      const height = linksListRef.current.getBoundingClientRect().height;
      linksDivRef.current.style.height = showLinks ? `${height}px` : `0px`;
    }
  }, [showLinks]);

  return (
    <>
      <div className="navbar">
        <div className="logo-bar-div" onClick={() => setShowLinks(!showLinks)}>
          <Link href="/archive">
            <Image src="/images/logo512.png" alt="logo" className="logo" width={40} height={40} />
          </Link>
          <FaBars className="fabars" />
        </div>
        <div className="links-div" ref={linksDivRef}>
          <ul className="links-list" ref={linksListRef}>
            {links.map((curr: LinkItem) => (
              <li
                key={curr.id}
                className="nav-link"
                onClick={() => setShowLinks(false)}
              >
                <Link 
                  href={curr.url} 
                  className={`navLink ${pathname === curr.url ? 'active' : ''}`}
                >
                  {curr.text}
                </Link>
              </li>
            ))}
            <li className="nav-link">
              <a
                className="navLink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1NCNuoF5E88HmdsI4IbNGldunUsT-hqXq/view?usp=share_link"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="dark-mode"></div>
      </div>
    </>
  );
};

export default Navbar;
