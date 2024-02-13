"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdSearch, MdOutlineClose, MdArrowForward } from "react-icons/md";
import { useBackgroundStore } from "@/context/BackgroundContext";
import { gsap } from "gsap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
interface NavbarProps {
  backgroundRef?: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = () => {
  const searchBarRef = useRef(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [toggle, settoggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { setBlur } = useBackgroundStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleSearchIconClick = () => {
    setIsSearchVisible(!isSearchVisible);
    console.log("clicked");
    setBlur(!isSearchVisible);
  };

  const handleClearInput = () => {
    setInputValue("");
    setIsSearchVisible(false);
    setBlur(!isSearchVisible);
  };

  useEffect(() => {
    const searchBar = searchBarRef.current;
    const tl = gsap.timeline({ paused: true });

    tl.to(searchBar, {
      height: isSearchVisible ? "100%" : "0%",
      duration: 0.3,
      ease: "power3.inOut",
    });

    if (isSearchVisible) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isSearchVisible]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    const tl = gsap.timeline({ reversed: true });

    tl.fromTo(
      menu,
      { height: 0, opacity: 0 },
      { height: "100%", opacity: 1, duration: 1, ease: "power4.out" }
    );

    if (toggle) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [toggle]);

  const toggleMobileMenu = () => {
    settoggle(!toggle);
  };

  return (
    <div className="h-full  sticky top-0 z-50 ">
      <header className="flex flex-row md:flex-row bg-white md:min-h-full min-h-full border-b-4 md:border-4  border-black  ">
        <div className="w-full md:w-1/4 md:mb-0  flex justify-center items-center border-black">
          <div className="text-black">
            <Link href="/">
              <Image
                src="/images/kappanavlogobig.png"
                alt="kappa navbar logo"
                width={0}
                height={0}
                className="w-[5rem] h-[5rem]"
              />
            </Link>
          </div>
        </div>

        <nav className="w-full md:w-2/4 flex justify-center items-center  md:mb-0 md:border-l-4 md:border-r-4 md:border-black px-6">
          <div className="hidden md:flex md:space-x-16 lg:space-x-28 px-8 ">
            <Link href="/explore" className="relative inline-block group">
              <span className="text-2xl md:text-2xl	">
                Explore
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
            </Link>
            <Link href="/watch" className="relative inline-block group">
              <span className="text-2xl md:text-2xl ">
                Watch
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
            </Link>
            <Link href="/listen" className="relative inline-block group">
              <span className="text-2xl md:text-2xl ">
                Listen
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
            </Link>
          </div>
        </nav>

        <div className="flex w-full md:w-1/4 justify-center items-center   gap-3 ">
          {isMobile ? (
            <>
              <div className="text-black" onClick={handleSearchIconClick}>
                <MdSearch size={35} />
              </div>
              <div className="text-black" onClick={toggleMobileMenu}>
                <HiOutlineMenuAlt3 size={35} />
              </div>
            </>
          ) : (
            <div
              className="text-black flex flex-row gap-5 items-center cursor-pointer"
              onClick={handleSearchIconClick}
            >
              <p className="text-lg md:text-2xl font-medium">Search</p>
              <MdSearch size={24} />
            </div>
          )}
        </div>

        {isSearchVisible && (
          <div className="absolute top-full left-0 w-full h-full bg-white z-10  border-black border-4 border-t-0">
            <div className="flex flex-row justify-between px-2 pt-4 ">
              <MdOutlineClose
                size={80}
                onClick={handleClearInput}
                className="cursor-pointer pb-8"
              />
              <form className="flex-grow ">
                <input
                  type="text"
                  placeholder="What are you Looking For?"
                  className="border-none outline-none w-full text-s md:text-4xl items-center justify-center md:pl-7 md:pt-1 pt-3  "
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </form>
              <MdArrowForward size={80} className="cursor-pointer pb-8" />
              {/* /> */}
            </div>
          </div>
        )}

        {toggle && (
          <div
            ref={mobileMenuRef}
            className="fixed top-0 left-0 w-full h-full bg-white z-20 overflow-hidden  "
          >
            <div className="flex flex-col h-full ">
              {/* Your menu items go here */}
              <div className="container ">
                <div className="flex justify-between items-center   border-b-4 border-black pl-6 ">
                  <Link href="/">
                    <Image
                      src="/images/kappanavlogobig.png"
                      alt="kappa navbar logo"
                      width={0}
                      height={0}
                      className="w-[5rem] h-[5rem]"
                    />
                  </Link>

                  <div className="flex gap-3 pr-6">
              <div className="text-black" onClick={handleSearchIconClick}>
                <MdSearch size={35} />
              </div>
              <div className="text-white bg-black " onClick={toggleMobileMenu}>
                <HiOutlineMenuAlt3 size={35} />
              </div>
            </div>
          </div>
         
                <div className="container flex flex-col justify-center items-center pt-28">
                <Link href="/explore" onClick={toggleMobileMenu}>
                  <p className="text-black  text-3xl   p-4 py-4 mb-4">
                    Explore
                  </p>
                </Link>
                <Link href="/watch" onClick={toggleMobileMenu}>
                  <p className="text-black  text-3xl  p-4 py-4 mb-4">
                    Watch
                  </p>
                </Link>
                <Link href="/listen" onClick={toggleMobileMenu}>
                  <p className="text-black text-3xl  p-4 py-4 mb-4">
                    Listen
                  </p>
                </Link>
                 <MdOutlineClose
                    size={40}
                    onClick={toggleMobileMenu}
                    className="cursor-pointer mt-36 "
                  />
                  
                </div>
              </div>
             
            </div>
            
          </div>
          
        )}
        
      </header>
    </div>
  );
};

export default Navbar;
