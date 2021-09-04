import Image from 'next/image';
import { Text, Heading } from "theme-ui";
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

function Banner() {
    return (
        <section className="">
            <div class="bg-cover px-[16px] bg-fixed h-screen text-center text-light" style={{ backgroundImage: "url(./bgDesktop.png)" }} >
                <h1 className="break-normal font-black text-[48px] lg:tracking-[0.065em] tracking-[0.045em] lg:text-[64px] pt-[161px] lg:pt-[284px] uppercase max-w-[691px] mx-auto">Hack Club Cucek</h1>
                <p className="pt-[4px] pb-[44px] font-normal lg:text-[24px] text-[20px] max-w-[845px] mx-auto ">A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.</p>
                <button className="bg-red hover:shadow-2xl active:scale-90 transition duration-150 font-semibold lg:text-[20px] text-[16px] rounded-full w-[157px] h-[59px] lg:w-[201px] lg:h-[66px] text-light">
                    <div className=" inline-flex items-center space-x-[12.64px]">
                        <p>Our Vision</p>
                        <ArrowRightLineIcon />
                    </div>
                </button>
            </div>
        </section>
    )
}

export default Banner
