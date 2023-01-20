import React, { useState, useEffect } from "react";

/* REACT-ROUTER-DOM */
import { NavLink, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (toggleMenu && !event.target.closest(".navigation")) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [toggleMenu]);

  


  return (
    <div className="navigation">
      <svg
        className="humberger"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        <path
          d="M3 7H21M3 12H21M3 17H21"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <NavLink to="/" className="nav-link home-link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9V18M7.5 13.5H16.5M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
      <div className="container-arrow-direction">
        <svg
          onClick={() => navigate(-1)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate(1)}
        >
          <path
            d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {toggleMenu ? (
        <div className="container-links-nav">
          <NavLink to="/IS" className="nav-link">
            <p>Information système</p>
          </NavLink>
          <NavLink to="/monitoring" className="nav-link">
            <p>Monitoring</p>
          </NavLink>
          <NavLink to="/soft-versions" className="nav-link">
            <p>Soft Versions</p>
          </NavLink>
          <NavLink to="/network" className="nav-link">
            <p>Network (local)</p>
          </NavLink>
          <NavLink to="/wifi" className="nav-link">
            <p>Wifi</p>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navigation;
