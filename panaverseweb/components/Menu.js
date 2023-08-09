import React, { Component, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMoon } from "react-icons/hi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { MdContactMail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";

import { FaFacebookSquare } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="mobile   md:hidden">
        <div
          class="bg-center   justify-center "
          style={{
            position: "fixed",
            zIndex: "10",
            top: "0",

            backgroundImage: `url(/mobile-nav-bar.png)`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "80px",
            opacity: 0.9,
          }}>
          <div className=" flex mx-10  text-lg mt-3 text-slate-200 justify-between ">
            <Image src="/logo.png" width={90} height={80} alt="icon" />

            <div className="flex items-center gap-6">
              <HiMoon className="text-2xl" />
              <button onClick={toggleVisibility}>
                <AiOutlineMenuFold className="text-4xl" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="fixed top-[84px]    right-0">
            <img className="" src="/mobile-menu-cover.png" width="full" height="full" alt="hg" />
          </div>
          <div className="fixed top-[95px] right-[20px] text-6xl text-slate-200">
            <button onClick={toggleVisibility}>
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="fixed  top-60 right-[100px] text-2xl text-slate-200">
            <nav>
              <ul>
                <li className="flex gap-2">
                  <ImHome className="text-4xl hover:text-red-800" />
                  <Link href="/">Home</Link>
                </li>

                <li className="mt-4 flex gap-2">
                  <BsPeopleFill className="text-4xl" />
                  <Link href="/">About</Link>
                </li>
                <li className="mt-4 flex gap-2">
                  <SiBookstack className="text-4xl" />
                  <Link href="/">Course</Link>
                </li>
                <li className="mt-4 flex gap-2">
                  <MdContactMail className="text-4xl" />
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <div className=" flex gap-2 justify-center mt-10">
                <FaFacebookSquare className="text-4xl" />
                <AiFillYoutube className="text-4xl" />
                <SiTelegram className="text-4xl" />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="tablet hidden sm:hidden md:block lg:hidden  ">
        <div
          class=" "
          style={{
            position: "fixed",
            zIndex: "10",
            top: "0",

            backgroundImage: `url(/nav-bar.png)`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100px",
            opacity: 0.9,
          }}>
          <div className="">
            <div className=" mx-10 gap-8  menu-wrapper flex justify-between mt-4  items-center text-md text-slate-200">
              <Image src="/logo.png" width={125} height={116} alt="icon" />
              <nav>
                <ul className="flex gap-6 ">
                  <li>
                    <Link href="/" className="home hover:font-bold ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="about hover:font-bold  home   ">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="courses hover:font-bold home ">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="courses hover:font-bold home ">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center">
                <HiMoon className="text-2xl" />
                <button
                  className="ml-4 text-slate-200 hover:font-bold font-semibold "
                  style={{
                    backgroundImage: `url( /button.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "44px",
                    width: "130px",
                  }}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop hidden lg:block">
        <div
          class="bg-center  "
          style={{
            position: "fixed",
            zIndex: "10",
            top: "0",

            backgroundImage: `url(/nav-bar.png)`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "110px",
            opacity: 0.9,
          }}>
          <div className="">
            <div className=" mx-20 mt-4 max-w-screen-xl menu-wrapper flex justify-between text-center items-center text-lg text-slate-200 gap-[10px] ">
              <Image src="/logo.png" width={125} height={116} alt="icon" />
              <nav>
                <ul className="flex gap-10 ">
                  <li>
                    <Link href="/" className="home hover:font-bold ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="about hover:font-bold  home   ">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="courses hover:font-bold home ">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="courses hover:font-bold home ">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center">
                <HiMoon className="text-2xl" />
                <button
                  className="ml-8 text-slate-200 hover:font-bold font-semibold "
                  style={{
                    backgroundImage: `url( /button.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "44px",
                    width: "130px",
                  }}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
