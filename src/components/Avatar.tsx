import { useState } from "react";
import userAtom from "@/store/userStore";
import { useAtom } from "jotai";
import Link from "next/link";



export default function Avatar() {
    const [isUserMenuHidden, setIsUserMenuHidden] = useState(true);
    const [user, _] = useAtom(userAtom);
    console.dir(user)
    if(!user){

        return (
            <>
                <Link href="/auth/login" className="bg-primary-color outline-none p-2 rounded-3xl">
                 Sign in
                </Link>
            </>
        )


    }


  return (
    <div className="flex items-center md:order-2 relative">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        onClick={() => {
          setIsUserMenuHidden(!isUserMenuHidden);
        }}
      >
        <span className="sr-only">Open user menu</span>
        {/* <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/docs/images/people/profile-picture-3.jpg"
              width="20"
              height="20"
              alt="user photo"
            /> */}
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
      <div
        className={`${
          isUserMenuHidden ? "hidden" : ""
        } absolute  top-12 right-0 z-50   text-base list-none rounded-lg shadow bg-gray-700 divide-gray-600 h-30 w-56`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Haidar Jbeily
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            h.Jbeily@innopolis.university
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
}
