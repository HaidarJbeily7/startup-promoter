"use client";
import { usePathname } from "next/dist/client/components/navigation";
import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";
// import { useRouter } from "next/router";


export default function NavBar() {
  
  const pathname = usePathname();


  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-1">
        <div className="flex ">
          <Link href="/products" className="flex items-start">
            <Image
              src="/logo.svg"
              className="h-8 "
              width="180"
              height="80"
              alt="Prostart Logo"
            />
          </Link>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/products"
                  className={`block py-2 pl-3 pr-4 rounded bg-transparent  md:p-0 ${pathname == '/products' ? ' text-font-bold-color':'text-font-primary-color'}`}
                  aria-current="page"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className={`block py-2 pl-3 pr-4 rounded bg-transparent  md:p-0 ${pathname == '/jobs' ? ' text-font-bold-color':'text-font-primary-color'}`}
                >
                  Вакансии
                </Link>
              </li>
              <li>
                <Link
                    href="/chat"
                    className={`block py-2 pl-3 pr-4 rounded bg-transparent  md:p-0 ${pathname == '/chat' ? ' text-font-bold-color':'text-font-primary-color'}`}
                >
                  ИИ ассистент
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Avatar />
      </div>
    </nav>
  );
}
