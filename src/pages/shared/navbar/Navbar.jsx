import React from "react";
import Logo from "../../../components/logo/Logo";
import { NavLink, Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser().catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          Coverage
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/send-percel"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          Send Parcel
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          Contact
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/dashboard/my-percels"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold underline" : ""
            }
          >
            My-Percels
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl max-w-7xl mx-auto">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link className="btn btn-ghost text-xl">
          <Logo />
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}

        <Link to="/rider" className="btn btn-primary text-gray-800">
          Be a Rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
