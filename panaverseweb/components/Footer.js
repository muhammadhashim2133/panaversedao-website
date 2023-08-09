import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdAddLocationAlt } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div
        className="mobile  md:hidden lg:hidden text-lg  text-slate-200  "
        style={{
          backgroundImage: `url(/footer-bar.png)`,
          width: "full",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "auto",
        }}>
        <div className=" flex-col   mx-10 md:mx-20 gap-10">
          <div className="  flex-col pt-10  ">
            <div className="flex-col ">
              <div className="flex justify-center  pb-1 ">
                <Image src="/logo.png" width={150} height={100} />
              </div>

              <div className="flex gap-2 pb-1 items-center justify-center ">
                <MdAddLocationAlt />
                <div text-lg text-slate-200>
                  PLOT 245/2 PECHS KARACHI
                </div>
              </div>

              <div className="flex gap-2 items-center  justify-center  ">
                <RiWhatsappFill />
                <div>0333-1265782</div>
              </div>
            </div>
          </div>

          <div className="flex-col ">
            <div className=" hover:font-bold text-center mt-10 pb-1  ">
              <Link href="/">Home</Link>
            </div>
            <div className="hover:font-bold text-center pb-1">
              <Link href="/">About</Link>
            </div>

            <div className="hover:font-bold text-center pb-1">
              <Link href="/">Courses</Link>
            </div>
            <div className="hover:font-bold text-center">
              <Link href="/">Contact</Link>
            </div>
          </div>

          <div className="flex-col  ">
            <div className="text-center pt-10"> Follow Us</div>
            <div className="flex items-center justify-center  gap-4 mt-2 row">
              <div className="hover:text-red-800">
                <Link href="">
                  <ImFacebook2 />
                </Link>
              </div>
              <div className="text-xl hover:text-red-800 ">
                <Link href="">
                  <AiFillLinkedin />
                </Link>
              </div>
              <div className="text-xl hover:text-red-800">
                <Link href="">
                  <FaTwitterSquare />
                </Link>
              </div>
              <div className="text-xl hover:text-red-800">
                <Link href="">
                  <FaGithubSquare />
                </Link>
              </div>
              <div className="text-2xl hover:text-red-800">
                <Link href="">
                  <GrYoutube />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 ">
            <div className="text-center">Subscribe </div>
            <div className=" mt-2 mb-2  flex justify-center justify-items-center content-center items-center  ">
              <input className=" w-[60%]  border-2  rounded-md h-[100%] p-1 " type="text" placeholder="Email here" />
            </div>
            <div className="text-center">
              <button
                className="  hover:font-bold  "
                style={{
                  backgroundImage: `url( /button.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  height: "44px",
                  width: "130px",
                }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-red-900 border-1.5 mt-10 my-4"></div>
          <div className="text-sm font-normal text-center pb-5 ">&#169; 2023 Muhammad-Hashim All Rights Reserved</div>
        </div>
      </div>

      <div
        className="tabled hidden sm:hidden md:block lg:hidden text-lg   text-slate-200  "
        style={{
          backgroundImage: `url(/footer-bar.png)`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "auto",
        }}>
        <div className=" flex py-10  mx-10 md:mx-20 gap-[28%]   content-center items-center  justify-items-center justify-center">
          <div className="  flex-col  ">
            <div className="flex-col ">
              <div className="flex justify-center  pb-1 ">
                <Image src="/logo.png" width={150} height={100} />
              </div>

              <div className="flex gap-2 pb-1 items-center justify-center ">
                <MdAddLocationAlt />
                <div text-lg text-slate-200>
                  PLOT 245/2 PECHS KARACHI
                </div>
              </div>

              <div className="flex gap-2 items-center  justify-center  ">
                <RiWhatsappFill />
                <div>0333-1265782</div>
              </div>
            </div>
          </div>

          <div className="flex-col mr-[110px] ">
            <div className=" hover:font-bold text-center  pb-1  ">
              <Link href="/">Home</Link>
            </div>
            <div className="hover:font-bold text-center pb-1">
              <Link href="/">About</Link>
            </div>

            <div className="hover:font-bold text-center pb-1">
              <Link href="/">Courses</Link>
            </div>
            <div className="hover:font-bold text-center">
              <Link href="/">Contact</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="second-row flex   mx-10 md:mx-20 gap-[28%] pb-10     justify-items-center justify-center">
            <div className="flex-col content-center items-center justify-center justify-items-center ">
              <div className="text-center "> Follow Us</div>
              <div className="flex items-center justify-center   gap-4 mt-2 row">
                <div className="hover:text-red-800">
                  <Link href="">
                    <ImFacebook2 />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800 ">
                  <Link href="">
                    <AiFillLinkedin />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800">
                  <Link href="">
                    <FaTwitterSquare />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800">
                  <Link href="">
                    <FaGithubSquare />
                  </Link>
                </div>
                <div className="text-2xl hover:text-red-800">
                  <Link href="">
                    <GrYoutube />
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <div className="text-center">Subscribe </div>
              <div className=" mt-2 mb-2  flex justify-center justify-items-center content-center items-center  ">
                <input className=" w-[100%]  border-2  rounded-md h-[100%] p-1 " type="text" placeholder="Email here" />
              </div>
              <div className="text-center">
                <button
                  className="  hover:font-bold  "
                  style={{
                    backgroundImage: `url( /button.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "44px",
                    width: "130px",
                  }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="border-t border-red-900 border-1.5  "></div>
          <div className="text-sm font-normal text-center py-5 ">&#169; 2023 Muhammad-Hashim All Rights Reserved</div>
        </div>
      </div>

      <div
        className="desktop hidden sm:hidden md:hidden lg:block text-lg   text-slate-200  "
        style={{
          backgroundImage: `url(/footer-bar.png)`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "auto",
        }}>
        <div className=" flex py-10  mx-10 md:mx-20 gap-20  content-center items-center  justify-items-center justify-center">
          <div className="  flex-col  ">
            <div className="flex-col ">
              <div className="flex justify-center  pb-1 ">
                <Image src="/logo.png" width={150} height={100} />
              </div>

              <div className="flex gap-2 pb-1 items-center justify-center ">
                <MdAddLocationAlt />
                <div text-lg text-slate-200>
                  PLOT 245/2 PECHS KARACHI
                </div>
              </div>

              <div className="flex gap-2 items-center  justify-center  ">
                <RiWhatsappFill />
                <div>0333-1265782</div>
              </div>
            </div>
          </div>

          <div className="flex-col ">
            <div className=" hover:font-bold text-center  pb-1  ">
              <Link href="/">Home</Link>
            </div>
            <div className="hover:font-bold text-center pb-1">
              <Link href="/">About</Link>
            </div>

            <div className="hover:font-bold text-center pb-1">
              <Link href="/">Courses</Link>
            </div>
            <div className="hover:font-bold text-center">
              <Link href="/">Contact</Link>
            </div>
          </div>

          <div className="flex-col content-center items-center justify-center justify-items-center ">
            <div className="text-center "> Follow Us</div>
            <div className="flex items-center justify-center   gap-4 mt-2 row">
              <div className="hover:text-red-800">
                <Link href="">
                  <ImFacebook2 />
                </Link>
              </div>
              <div className="text-xl hover:text-red-800 ">
                <Link href="">
                  <AiFillLinkedin />
                </Link>
              </div>
              <div className="text-xl hover:text-red-800">
                <Link href="">
                  <FaTwitterSquare />
                </Link>
              </div>
              <div className="text-xl hover:text-red-800">
                <Link href="">
                  <FaGithubSquare />
                </Link>
              </div>
              <div className="text-2xl hover:text-red-800">
                <Link href="">
                  <GrYoutube />
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-center">Subscribe </div>
            <div className=" mt-2 mb-2  flex justify-center justify-items-center content-center items-center  ">
              <input className=" w-[100%]  border-2  rounded-md h-[100%] p-1 " type="text" placeholder="Email here" />
            </div>
            <div className="text-center">
              <button
                className="  hover:font-bold  "
                style={{
                  backgroundImage: `url( /button.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  height: "44px",
                  width: "130px",
                }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-red-900 border-1.5  "></div>
          <div className="text-sm font-normal text-center py-5 ">&#169; 2023 Muhammad-Hashim All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
