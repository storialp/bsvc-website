import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";

interface NavbarProps {
  path: string;
  "client:load": boolean;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Divisions", href: "#divisions" },
  { name: "Alumni", href: "/alumni" },
];

export default function Navbar({ path }: NavbarProps) {
  return (
    <Disclosure as="nav" className="bg-[#3C3C3B] shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    className="block h-12 w-36 lg:hidden rounded-full"
                    src="https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/BSVC+-+Logo+Orizzontale+3.png"
                    alt="BSVC logo"
                  />
                  <img
                    className="hidden h-12 w-36 lg:block rounded-full"
                    src="https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/BSVC+-+Logo+Orizzontale+3.png"
                    alt="BSVC logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      href={item.href}
                      key={item.name}
                      className={
                        path === item.href
                          ? "inline-flex items-center border-b-2 border-[#FFDE00] px-1 pt-1 text-sm font-medium text-gray-50"
                          : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-50 hover:border-gray-300 hover:text-gray-100 "
                      }
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex justify-end items-center">
                    <a
                      type="button"
                      className="inline-flex relative items-center align-middle justify-center h-10 px-4 border-b-2 border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                      href="/"
                    >
                      Join us!
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  href={item.href}
                  className={
                    path === item.href
                      ? "block border-l-4 border-yellow-400 bg-yellow-50 py-2 pl-3 pr-4 text-base font-medium text-yellow-700"
                      : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  }
                  key={item.name}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
