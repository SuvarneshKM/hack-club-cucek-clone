import Image from 'next/image';
import Link from 'next/link';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

function Events() {
    return (
        <section className="lg:pt-[120px] pt-[80px]">
            <div className="flex flex-col text-center items-center">
                <h1 className="whitespace-nowrap lg:pt-[136px] pt-[80px] lg:w-[213px] lg:h-[41px] w-[160px] h-[30px] inline text-center text-dark font-bold lg:text-[32px] text-[24px] z-20">Upcoming Events</h1>
                <div className="lg:w-[178.67px] w-[134px] h-[10px] lg:mr-8 mr-7 lg:h-[12px] bg-red lg:mt-[31px] mt-[22px] z-0 " />
            </div>
            <div className="flex lg:flex-row flex-col lg:pl-0 pl-[16px] lg:space-x-[82.5px] space-y-[64px] lg:space-y-0 lg:pt-[96px] pt-[40px]">
                <div className="text-dark flex flex-col lg:pt-[96px] pt-[40px] ">
                    <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                        <Image
                            src='/env1.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="lg:text-[28px] text-[24px] font-bold text-red lg:pt-[40px] pt-[32px]">
                            Google I/O 2021
                        </h4>
                        <span className="pt-[4px] lg:text-[16px] text-[14px] font-normal text-darkshade">
                            September 1st Week
                        </span>
                        <p className="lg:text-[20px] text-[18px] font-normal text-dark pt-[20px]">
                            Amet, viverra nec sed in massa nibh.
                            Magna dapibus auctor velit, est, mattis
                            urna. Malesuada amet nisi libero, urna
                            tristique aliquam.
                        </p>

                        <div className="pt-[12px] lg:pt-[16px]">
                            <Link href="https://twitter.com/hackclubcucek/">
                                <a target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-[12px] cursor-pointer">
                                    <p className="text-red font-medium text-[16px]">Read More</p>
                                    <ArrowRightLineIcon className="text-red hidden lg:flex" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-dark flex flex-col lg:pt-[96px] pt-[40px] ">
                    <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                        <Image
                            src='/env2.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="lg:text-[28px] text-[24px] font-bold text-red lg:pt-[40px] pt-[32px]">
                            Hactober Fest 2022
                        </h4>
                        <span className="pt-[4px] lg:text-[16px] text-[14px] font-normal text-darkshade">
                            Full October
                        </span>
                        <p className="lg:text-[20px] text-[18px] font-normal text-dark pt-[20px]">
                            Amet, viverra nec sed in massa nibh.
                            Magna dapibus auctor velit, est, mattis urna.
                            Malesuada amet nisi libero, urna tristique aliquam.
                        </p>

                        <div className="pt-[12px] lg:pt-[16px]">
                            <Link href="https://twitter.com/hackclubcucek/">
                                <a target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-[12px] cursor-pointer">
                                    <p className="text-red font-medium text-[16px]">Read More</p>
                                    <ArrowRightLineIcon className="text-red hidden lg:flex" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-dark flex flex-col lg:pt-[96px] pt-[40px] ">
                    <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                        <Image
                            src='/env3.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="lg:text-[28px] text-[24px] font-bold text-red lg:pt-[40px] pt-[32px]">
                            DevFest India
                        </h4>
                        <span className="pt-[4px] lg:text-[16px] text-[14px] font-normal text-darkshade">
                            November 14-16
                        </span>
                        <p className="lg:text-[20px] text-[18px] font-normal text-dark pt-[20px]">
                            Amet, viverra nec sed in massa nibh.
                            Magna dapibus auctor velit, est, mattis urna.
                            Malesuada amet nisi libero, urna tristique aliquam.
                        </p>

                        <div className="pt-[12px] lg:pt-[16px]">
                            <Link href="https://twitter.com/hackclubcucek/">
                                <a target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-[12px] cursor-pointer">
                                    <p className="text-red font-medium text-[16px]">Read More</p>
                                    <ArrowRightLineIcon className="text-red hidden lg:flex" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[48px] lg:pt-[104px] items-center justify-center text-center">
                <button
                    className="bg-transparent
                    hover:bg-red text-red 
                     font-semibold lg:text-[20px] text-[16px] hover:text-light 
                    lg:w-[202px] lg:h-[64px] w-[196px] h-[59px] border-2 border-red
                    hover:border-transparent rounded-full">
                    View All Events
                </button>
            </div>
        </section>
    )
}

export default Events
