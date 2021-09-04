import Image from 'next/image';
import { Text, Heading } from "theme-ui";
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

function Banner() {
    return (
        <section className="">
            <div class="bg-cover bg-fixed h-screen text-center text-light" style={{ backgroundImage: "url(./bgDesktop.png)" }} >
                <h1 className="font-black text-[64px] pt-[284px] uppercase">Hack&nbsp;Club&nbsp;Cucek</h1>
                <p className="pt-[4px] pb-[44px] font-normal text-[24px] mx-[300px] ">A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.</p>
                <button className="bg-red hover:shadow-2xl active:scale-90 transition duration-150 font-semibold text-[20px] rounded-full w-[201px] h-[66px] text-light">
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
