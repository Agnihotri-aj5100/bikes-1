import React, { useState } from "react";
import SvgWrapper from "../../component/global/svg-wrapper";
import "./header.css";
import Sidebar from "../sidebar/sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isDesktop = window.innerWidth > 768; // Assuming 768px is the breakpoint for desktop view

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-desktop">
          <div className="first-row">
            <span className="Brand-Logo">
              <SvgWrapper src="Brand-Logo" />
            </span>
            {isDesktop && <SvgWrapper src="Menu" onClick={toggleSidebar} />}
            {!isDesktop && (
              <SvgWrapper
                src={isSidebarOpen ? "grey-cross" : "Menu"}
                onClick={toggleSidebar} className='greyIcon'
              />
            )}
          </div>
          {isSidebarOpen && (
            <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
}
