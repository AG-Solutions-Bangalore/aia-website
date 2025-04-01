import React, { useState } from "react";
import { Link } from "react-router-dom";

import homeImg1 from "../../assets/img/menu/home-1.jpg";
import homeImg2 from "../../assets/img/menu/home-2.jpg";
import homeImg3 from "../../assets/img/menu/home-3.jpg";
import homeImg4 from "../../assets/img/menu/home-4.jpg";
import homeImg5 from "../../assets/img/menu/home-5.jpg";

const MenuItems = (props) => {
  const { mobileMenu } = props;
  const [home, setHome] = useState(false);
  const [course, setCourse] = useState(false);
  const [cia, setCia] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setCourse(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "course") {
      setHome(false);
      setCourse(!course);
      setPage(false);
      setBlog(false);
    } else if (menu === "cia") {
      setHome(false);
      setCia(!cia);
      setPage(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setCourse(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setCourse(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e) => {
    if (mobileMenu) {
      e.preventDefault();
    }
  };

  return (
    <ul>
        <li>
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/about-us">
          <span>About us</span>
        </Link>
      </li>
      <li className="has-dropdown">
        <Link to="#" className={course ? "expanded" : ""} onClick={handleClick}>
          <span>Courses</span>
          <button
            className={`${
              course
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("course");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            course ? "it-submenu submenu d-block" : "it-submenu submenu"
          }
        >
          <li>
            <Link to="#">CFE Curriculum</Link>
          </li>
          <li>
            <Link to="#">CIA Curriculum</Link>
          </li>
          {/* <li>
            <Link to="/course-details" >CIA Challenge</Link>
            <ul>CIA Challenge Curriculum</ul>
            <ul>CIA Challenge Prep Course</ul>
          </li> */}
          <li className="has-dropdown">
            <Link to="#" className={cia ? "expanded" : ""}>
              CIA Challenge
              <button
                className={`${
                  cia
                    ? "dropdown-toggle-btn dropdown-opened"
                    : "dropdown-toggle-btn"
                } d-xl-none`}
                onClick={() => {
                  openMobileMenu("cia");
                }}
              >
                <i className="fal fa-angle-right"></i>
              </button>
            </Link>

            {/* Submenu for CIA Challenge */}
            <ul className={cia ? "d-block" : "it-submenu submenu"}>
              <li>
                <Link to="#">CIA Challenge Curriculum</Link>
              </li>
              <li>
                <Link to="#">CIA Challenge Prep Course</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="#" className={page ? "expanded" : ""} onClick={handleClick}>
          <span>Free Resources</span>
          <button
            className={`${
              page
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("page");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>

        <ul className={page ? "it-submenu submenu" : "it-submenu submenu "}>
          <li>
            <Link to="">CFE</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="" className={blog ? "expanded" : ""} onClick={handleClick}>
          <span>Other</span>
          <button
            className={`${
              blog
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("blog");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={blog ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Our Passout</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </li>
      <li>
        <button class="ed-course-btn">Pay Now</button>
      </li>
    </ul>
  );
};
export default MenuItems;
