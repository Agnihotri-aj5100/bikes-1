import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SvgWrapper from "../global/svg-wrapper";

const context = {
  navigation: [
    {
      display: "E-BIKES",
      sub_navigation: [
        {
          display: "Sub Home 1",
          sub_navigation: [
            { display: "Sub Sub Home 1" },
            { display: "Sub Sub Home 2" },
          ],
        },
        {
          display: "Sub Home 2",
          sub_navigation: [
            { display: "Sub Sub Home 3" },
            { display: "Sub Sub Home 4" },
          ],
        },
      ],
    },
    {
      display: "BIKES",
      sub_navigation: [{ display: "Sub About 1" }, { display: "Sub About 2" }],
    },
    {
      display: "ACCESSORIES",
      sub_navigation: [
        { display: "Sub Contact 1" },
        { display: "Sub Contact 2" },
      ],
    },
    {
      display: "ASTRA TRIBE",
      sub_navigation: [
        { display: "Sub Contact 1" },
        { display: "Sub Contact 2" },
      ],
    },
    {
      display: "ABOUT US",
      sub_navigation: [
        { display: "Sub Contact 1" },
        { display: "Sub Contact 2" },
      ],
    },
  ],
};

function Sidebar() {
  const [activeChildIndex, setActiveChildIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set initial state to true to show the sidebar
  const [sidebarl2Nav, setSidebarl2Nav] = useState({});
  const [sidebarl3Nav, setSidebarl3Nav] = useState({});
  const [searchInputValue, setSearchInputValue] = useState("");

  const [mobileNavRedirectionLink] = useState({
    "contact-us": "",
    "store-locator": "/locate-us",
    "track-order": "",
    "country-selector": "",
  });

  useEffect(() => {
    setIsMounted(true);
    console.log("mounted NavData", context);
    return () => {
      setIsMounted(false);
    };
  }, []);
  

  const getNavigation = context?.navigation?.slice(0, 100);

  const getMenuOffset = () => {
    let val = "layout_1";
    return val === "layout_1" || val === "layout_2"
      ? "padding-top: 20px"
      : "padding-top: 4px";
  };

  const toggleChild = (index) => {
    setActiveChildIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const isDesktop = window.innerWidth > 768; // Assuming 768px is the breakpoint for desktop view


  const isChildOpen = (index) => {
    return activeChildIndex === index;
  };

  const clearSearch = () => {
    setSearchInputValue("");
  };

  const getGlobalConfigValue = () => {
    // Implement this function
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  

  if (!isSidebarOpen) {
    return null; // If the sidebar is closed, return null to hide the component
  }

  return (
      <transition name="slideRight">
        <div className="sidebar">
          <div className="header-sidebar-navigation">
            <div className="search-bar">
              <div className="search-top">
                <SvgWrapper
                  className="search-icon"
                  src="white-search"
                ></SvgWrapper>
               <input
              className="search-input"
              type="text"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="What are looking for ?"
            />
                <button className="clear-btn" onClick={clearSearch}>
                  Clear
                </button>
              </div>
              
              <span className="showIcon">
              {isDesktop && (
                  <SvgWrapper className="sidebar-icon" src="x-Menu" onClick={toggleSidebar} />
                )}
            </span>
            </div>
            <nav className="sidebar-navigation">
              <ul key="l1_Nav" className="l1_nav">
                <transition-group name="fade" mode="out-in">
                  {getNavigation.map((nav, index) => (
                    <li className="l1_nav_border" key={index}   onClick={() => toggleChild(index)}>
                      <div
                        className="label-with-icon"
                      
                      >
                        <p className="l1_label">{nav.display}</p>
                        {nav.sub_navigation &&
                          nav.sub_navigation.length > 0 && (
                            <div>
                              <SvgWrapper
                                className="plus-icon svg-solid-border"
                                src={
                                  isChildOpen(index)
                                    ? "minus-red"
                                    : "white-plus"
                                }
                              ></SvgWrapper>
                            </div>
                          )}
                      </div>
                      <transition name="fade">
                        <ul
                          className="l2_nav"
                          style={{ display: isChildOpen(index) ? 'block' : 'none' }}
                        >
                          {nav.sub_navigation.map((l2nav, l2index) => (
                            <li key={`l2_${l2index}`} className="l2_item">
                              <p className="l2_label">{l2nav.display}</p>
                            </li>
                          ))}
                        </ul>
                      </transition>
                    </li>
                  ))}
                </transition-group>
              </ul>
              <div className="sidebar-footer">
                <ul className="links">
                  <li>
                    <SvgWrapper
                      className="media-icons"
                      src="ICONS"
                    ></SvgWrapper>
                    Find My Bike
                  </li>
                  <li>
                    <SvgWrapper
                      className="media-icons"
                      src="location-r"
                    ></SvgWrapper>
                    Store Locator
                  </li>
                  <li>
                    <SvgWrapper
                      className="media-icons"
                      src="Group"
                    ></SvgWrapper>
                    Register Your Bike
                  </li>
                  <li>
                    <SvgWrapper
                      className="media-icons"
                      src="phone-r"
                    ></SvgWrapper>
                    Contact Us
                  </li>
                </ul>
                {isDesktop && (  <ul className="social-icons">
                  <li>
                    <SvgWrapper
                      className="social-icon"
                      src="facebook"
                    ></SvgWrapper>
                  </li>
                  <li>
                    <SvgWrapper
                      className="social-icon"
                      src="insta"
                    ></SvgWrapper>
                  </li>
                  <li>
                    <SvgWrapper
                      className="social-icon"
                      src="twitt"
                    ></SvgWrapper>
                  </li>
                  <li>
                    <SvgWrapper className="social-icon" src="link"></SvgWrapper>
                  </li>
                  <li>
                    <SvgWrapper
                      className="social-icon"
                      src="youtube"
                    ></SvgWrapper>
                  </li>
                  <li>
                    <SvgWrapper className="social-icon" src="whp"></SvgWrapper>
                  </li>
                </ul>
                )}
              </div>
            </nav>
          </div>
        </div>
      </transition>
  );
}

export default Sidebar;
