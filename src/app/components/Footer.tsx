'use client'

import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";

export const Footer = () => {

    return (
        <footer className="bg-white rounded-lg shadow  px-3 lg:px-12">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">

                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="sr-only">OpenResume</span>
                        <Image
                            src={logoSrc}
                            alt="OpenResume Logo"
                            className="h-8 w-full"
                            priority
                        />
                    </Link>
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span> */}
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/licence" className="hover:underline me-4 md:me-6">
                                Licence
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:underline">
                            Terms and Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © Credit to{" "}
                    <Link className="text-blue-500 hover:underline"  href="https://github.com/xitanggg/open-resume">OpenResume™</Link>
                </span>
            </div>
        </footer>
    )
}

