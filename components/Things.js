import ServiceFillIcon from 'remixicon-react/ServiceFillIcon';
import FlagFillIcon from 'remixicon-react/FlagFillIcon';
import CpuLineIcon from 'remixicon-react/CpuLineIcon';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import Link from 'next/link';


function Things() {
    return (
        <section className="lg:pt-[48px] pt-[32px]">
            <div className="flex flex-col text-center items-center">
                <h1 className="lg:pt-[48px] pt-[32px] lg:w-[213px] lg:h-[41px] w-[160px] h-[30px] text-center text-dark font-bold lg:text-[32px] text-[24px] z-20">
                    Things we do
                </h1>
                <div className="lg:w-[142px] w-[106.67px] h-[10px] lg:mr-14 mr-10 lg:h-[12px] bg-red lg:mt-[31px] mt-[22px] z-0 " />
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center text-center lg:pt-[72px] pt-[40px] lg:space-x-[112px] lg:space-y-0 space-x-0 space-y-[64px]">
                <div className="flex flex-col items-center text-center ">
                    <div className="flex h-[112px] w-[112px] text-center justify-center items-center rounded-full bg-red">
                        <ServiceFillIcon className="text-light w-[42.97px] h-[38.22px]" />
                    </div>
                    <h2 className="text-[20px] lg:text-[24px] text-center font-bold text-dark pt-[20px]">
                        Networking
                    </h2>
                    <p className="text-[18px] lg:text-[20px] font-normal text-dark lg:pt-[24px] pt-[16px] text-center justify-center">
                        Bibendum etiam nec massa ok ok
                        bendum etiam nec massa ok ok posuere neque diam. Mattis molestie feugiat nisi.
                    </p>
                    <div className="pt-[12px] lg:pt-[16px]">
                        <Link href="https://twitter.com/hackclubcucek/">
                            <a target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-[12px] text-center justify-center items-center rounded-full cursor-pointer">
                                <p className="text-red font-medium text-[16px]">Read More</p>
                                <ArrowRightLineIcon className="text-red hidden lg:flex" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center ">
                    <div className="flex h-[112px] w-[112px] text-center justify-center items-center rounded-full bg-red">
                        <FlagFillIcon className="text-light w-[36px] h-[38px]" />
                    </div>
                    <h2 className="text-[20px] lg:text-[24px] text-center font-bold text-dark pt-[20px]">
                        Skill Enhancement
                    </h2>
                    <p className="text-[18px] lg:text-[20px] font-normal text-dark lg:pt-[24px] pt-[16px] text-center justify-center">
                        Pellentesque iaculis erat molestie
                        bendum etiam nec massa ok ok proin consectetur dignissim cc nisi, lacus iaculis erat.
                    </p>
                    <div className="pt-[12px] lg:pt-[16px]">
                        <Link href="https://twitter.com/hackclubcucek/">
                            <a target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-[12px] text-center justify-center items-center rounded-full cursor-pointer">
                                <p className="text-red font-medium text-[16px]">Read More</p>
                                <ArrowRightLineIcon className="text-red hidden lg:flex" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center ">
                    <div className="flex h-[112px] w-[112px] text-center justify-center items-center rounded-full bg-red">
                        <CpuLineIcon className="text-light w-[40px] h-[40px]" />
                    </div>
                    <h2 className="text-[20px] lg:text-[24px] text-center font-bold text-dark pt-[20px]">
                        Software Development
                    </h2>
                    <p className="text-[18px] lg:text-[20px] font-normal text-dark lg:pt-[24px] pt-[16px] text-center justify-center">
                        Suspendisse libero amet, pharetr
                        spendisse libero amet, pharetr
                        Posuere sem ullamcol ok id at okok lobortis.
                    </p>
                    <div className="pt-[12px] lg:pt-[16px]">
                        <Link href="https://twitter.com/hackclubcucek/">
                            <a target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-[12px] text-center justify-center items-center rounded-full cursor-pointer">
                                <p className="text-red font-medium text-[16px]">Read More</p>
                                <ArrowRightLineIcon className="text-red hidden lg:flex" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Things
