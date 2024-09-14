import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Index() {
  return (
    <>
      <footer className="bg-white pt-0 sm:pt-10">
        <div className="mx-auto w-full max-w-screen-xl py-6 text-xs sm:p-4 sm:text-sm lg:py-8">
          <div className="grid grid-cols-4 px-3 text-xs sm:ml-[80px] sm:gap-4 sm:px-0 sm:text-base md:ml-[100px] xl:ml-[170px]">
            <div>
              <h2 className="mb-6 text-sm font-semibold sm:text-[20px]">
                Hello <span className="ml-[-3px] text-[#7295B8]">cer</span>
              </h2>
              <ul className="sm:font-medium ">
                <li className="mb-4">
                  <a href="/AboutUs" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/PrivatePolicy" className="hover:underline">
                    Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* SECOND */}
            <div className="ml-[-8px] mt-0.5 sm:ml-0 sm:mt-0">
              <h2 className="mb-6 font-semibold">QUICK LINKS</h2>
              <ul className="sm:font-medium ">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Overview
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Accessibility
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                     Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                  FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* THIRD */}
            <div className="ml-[-8px] mt-0.5 sm:ml-0 sm:mt-0">
              <h2 className="mb-6 font-semibold uppercase">SOLUTIONS</h2>
              <ul className="sm:font-medium ">
                <li className="mb-4">
                  <a href="/UIUX" className="hover:underline ">
                    UI/UX Design
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/WebDevelopment" className="hover:underline">
                    Web Design
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Wordpress
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Software
                  </a>
                </li>
              </ul>
            </div>

            {/* FOURTH */}
            <div className="mt-0.5 sm:mt-0">
              <h2 className="mb-6 font-semibold uppercase">Resources</h2>
              <ul className="sm:font-medium ">
                <li className="mb-4">
                  <a href="/HelpCenter" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Contact" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/Tutorial" className="hover:underline">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:block">
            <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

            <div className="grid grid-cols-1  text-sm text-[#475569] sm:grid-cols-2 sm:pl-0 lg:px-2 lg:text-base ">
              <div>
                <div className="flex">
                  <div>© 2024 </div>
                  <div className="pl-2">
                    <a href="/" className="hover:underline">
                      Hellocer Technologies.
                    </a>
                  </div>
                  <div className="pl-2"> All rights reserved.</div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 pt-2 sm:pt-0 md:grid-cols-2">
                  <div className="flex space-x-8"></div>

                  <div className="flex space-x-5 pt-4 sm:space-x-3 sm:pt-1 md:pl-16">
                    <div>
                      <a href="http://www.youtube.com/@expansioncybertech">
                        <FaYoutube />
                      </a>
                    </div>
                    <div>
                      <a href="http://www.facebook.com/expansioncybertech/">
                        <FaFacebookF />
                      </a>
                    </div>
                    <div>
                      <a href="http://www.x.com/expansiontech">
                        <FaXTwitter />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/expansioncybertech/">
                        <FaInstagram />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/company/expansioncybertech/">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center pt-4 sm:hidden">
            <div>
              <div className="flex text-xs">
                <div>© 2024 </div>
                <div className="pl-2">
                  <a href="/" className="hover:underline">
                    Hellocer Technologies.
                  </a>
                </div>
                <div className="pl-2"> All rights reserved.</div>
              </div>

              <hr className="my-2 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

              <div className="pl-8">
                <div className="flex space-x-4"></div>

                <div className="flex space-x-6 pt-3">
                  <div>
                    <a href="">
                      <FaYoutube />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaFacebookF />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaXTwitter />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
