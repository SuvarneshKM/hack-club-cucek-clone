import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import { useRouter } from 'next/dist/client/router';

function Navbar() {
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
        <nav className={`fixed top-0 z-50 grid grid-cols-3 ${handleShow ? "bg-light shadow-md " : ""}`}>
            <div className={`relative flex items-center ${handleShow ? "h-[69px] w-[124px]" : "h-[69px] w-[124px] lg:h-[96px] lg:w-[169.85px]"} ml-[16px] xl:ml-[100px] lg:ml-[50px] cursor-pointer`}>
                <Image onClick={home} src="https://assets.hackclub.com/flag-orpheus-top.svg"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* center */}
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
        </nav>
    )
}

export default Navbar
