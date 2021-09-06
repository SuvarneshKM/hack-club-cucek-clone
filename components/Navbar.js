import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import { useRouter } from 'next/dist/client/router';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { Transition } from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [handleShow, setHandleShow] = useState(false);
    const router = useRouter();
    const home = () => {
        router.push({
            pathname: '/'
        })
    }

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 0) {
                setHandleShow(true);
            } else
                setHandleShow(false);
        };
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);
    return (
        <>
            <header>
                <nav className="bg-light">
                    <div className="max-w-[1236px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className={`relative flex items-center ${handleShow ? "h-[69px] w-[124px]" : "h-[69px] w-[124px] lg:h-[96px] lg:w-[169.85px]"} ml-[16px] xl:ml-[100px] lg:ml-[50px] cursor-pointer`}>
                                    <Image onClick={home} src="https://assets.hackclub.com/flag-orpheus-top.svg"
                                        layout='fill'
                                        objectFit='contain'
                                        objectPosition='left'
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link href="/events">
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-red  text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Events
                                            </a>
                                        </Link>
                                        <Link href="/team">
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-red  text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Our Team
                                            </a>
                                        </Link>
                                        <Link href="/join">
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-red  text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Join Us
                                            </a>
                                        </Link>
                                        <Link href="/scrapbook">
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-red  text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Scrapbook
                                            </a>
                                        </Link>
                                        <Link href="/gallery">
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-red  text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Gallery
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link href="/events">
                                        <a
                                            href="#"
                                            className="cursor-pointer hover:text-red  block text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Events
                                        </a>
                                    </Link>
                                    <Link href="/team">
                                        <a
                                            href="#"
                                            className="cursor-pointer hover:text-red  block text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Our Team
                                        </a>
                                    </Link>
                                    <Link href="/join">
                                        <a
                                            href="#"
                                            className="cursor-pointer hover:text-red  block text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Join Us
                                        </a>
                                    </Link>
                                    <Link href="/scrapbook">
                                        <a
                                            href="#"
                                            className="cursor-pointer hover:text-red  block text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Scrapbook
                                        </a>
                                    </Link>
                                    <Link href="/gallery">
                                        <a
                                            href="#"
                                            className="cursor-pointer hover:text-red  block text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Gallery
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </header>
            {/* <nav className={`fixed top-0 z-50 grid grid-cols-3 ${handleShow ? "bg-light shadow-md " : ""}`}>
                <div className={`relative flex items-center ${handleShow ? "h-[69px] w-[124px]" : "h-[69px] w-[124px] lg:h-[96px] lg:w-[169.85px]"} ml-[16px] xl:ml-[100px] lg:ml-[50px] cursor-pointer`}>
                    <Image onClick={home} src="https://assets.hackclub.com/flag-orpheus-top.svg"
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left'
                    />
                </div>
                <div className={`hidden text-[18px] whitespace-nowrap font-medium md:inline-flex space-x-[50px] lg:space-x-[64px] ${handleShow ? "items-center text-dark" : "pt-[24px] lg:pt-[48px] text-light"} `}>
                    <Link href="/events">
                        <a className="cursor-pointer hover:text-red">Events</a>
                    </Link>
                    <Link href="/team">
                        <a className="cursor-pointer hover:text-red">Our Team</a>
                    </Link>
                    <Link href="/join">
                        <a className="cursor-pointer hover:text-red">Join Us</a>
                    </Link>
                    <Link href="/scrapbook">
                        <a className="cursor-pointer hover:text-red">Scrapbook</a>
                    </Link>
                    <Link href="/gallery">
                        <a className="cursor-pointer hover:text-red">Gallery</a>
                    </Link>

                    <div className="hidden xl:inline-flex justify-end space-x-[18px] mr-[100px]">
                        <Link href="https://twitter.com/hackclubcucek/">
                            <a target="_blank" rel="noopener noreferrer" className={`flex h-8 w-8 items-center border-2 p-1 rounded-full ${handleShow ? "bg-dark" : "bg-light"} hover:bg-red hover:border-red cursor-pointer`}>
                                <TwitterFillIcon className={`${handleShow ? "text-light" : "text-dark"}`} />
                            </a>
                        </Link>
                        <Link href="https://github.com/hackclub-cucek/" >
                            <a target="_blank" rel="noopener noreferrer" className={`flex h-8 w-8 items-center border-2 p-1 rounded-full ${handleShow ? "bg-dark" : "bg-light"} hover:bg-red hover:border-red cursor-pointer`}>
                                <GithubLineIcon className={`${handleShow ? "text-light" : "text-dark"}`} />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/company/hackclubcucek/" >
                            <a target="_blank" rel="noopener noreferrer" className={`flex h-8 w-8 items-center border-2 p-1 rounded-full ${handleShow ? "bg-dark" : "bg-light"} hover:bg-red hover:border-red cursor-pointer`}>
                                <LinkedinFillIcon className={`${handleShow ? "text-light" : "text-dark"}`} />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/hackclubcucek/" >
                            <a target="_blank" rel="noopener noreferrer" className={`flex h-8 w-8 items-center border-2 p-1 rounded-full ${handleShow ? "bg-dark" : "bg-light"} hover:bg-red hover:border-red cursor-pointer`}>
                                <InstagramLineIcon className={`${handleShow ? "text-light" : "text-dark"}`} />
                            </a>
                        </Link>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Navbar
