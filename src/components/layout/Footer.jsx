import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Outlet />
      <div className="mt-8 bg-[#0d0343] pt-9">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <div className="text-[18px] font-medium text-white">
                <h1 className="text-white font-extrabold">
                  <span className="text-rose-600">my</span>LOGO
                </h1>
              </div>
              <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                fugit non. Incidunt dolorum adipisci, tempore asperiores nemo
                odio facere officiis enim animi placeat eaque nesciunt alias
                beatae id, at dicta.
              </p>
              <div className="mt-[18px] flex gap-4">
                <Link className="hover:scale-110" target="_blank" href="#">
                  <FaFacebookF />
                </Link>
                <Link className="hover:scale-110" target="_blank" href="/">
                 <BsInstagram />
                </Link>
                <Link className="hover:scale-110" target="_blank" href="/">
                  <FaGithub />
                </Link>
                <Link className="hover:scale-110" target="_blank" href="">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className="md:w-[316px]">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <Link
                    href="tel:+911800123444"
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    +91 1800123444
                  </Link>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <Link
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    help@lorem.com
                  </Link>
                  <p className="font-Inter text-[12px] font-medium text-[#fff]">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <Link
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    Sub Nerul, Mumbia, India, 123456
                  </Link>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Address
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="">
                <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                  Pages
                </p>
                <ul>
                  <li className="mt-[15px]">
                    <Link
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/our-tutors"
                    >
                      News
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/become-Link-tutor"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/plans-and-pricing"
                    >
                      Plans and pricing
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/terms-and-conditions"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/privacy-policy"
                    >
                      Privcay policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                <p className="text-deutziawhite font-inter text-[18px] font-medium">
                  Download the app
                </p>
                <div className="flex gap-4 sm:flex-col">
                  <Link target="_blank" href="#">
                    <FaApple />
                  </Link>
                  <Link target="_blank" href="#">
                    <FaGooglePlay />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-[30px] text-white" />
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[10px] font-normal text-white md:text-[12px]">
              © Copyright 2024 All Rights Reserved by ROBIN. PVT. LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;












