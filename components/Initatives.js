import Image from 'next/image';

function Initatives() {
    return (
        <section>
            <div className="flex flex-col text-center items-center">
                <h1 className="lg:pt-[136px] pt-[80px] lg:w-[213px] lg:h-[41px] w-[160px] h-[30px] text-center text-dark font-bold lg:text-[32px] text-[24px] z-20">
                    Things we do
                </h1>
                <div className="lg:w-[142px] w-[106.67px] h-[10px] lg:mr-14 mr-10 lg:h-[12px] bg-red lg:mt-[31px] mt-[22px] z-0 " />
            </div>
            <div className="text-dark flex flex-col lg:flex-row lg:pt-[96px] pt-[32px] items-center justify-center">
                <div className="relative lg:h-[440px] lg:w-[440px] h-[343px] w-[343px] flex-shrink-0 ">
                    <Image
                        src='/int1.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                <div className="flex lg:pl-[120px] flex-col pl-[16px]">
                    <h4 className="lg:text-[28px] text-[24px] font-bold text-dark pt-[32px]">
                        Id vel varius mauris morbi quis
                    </h4>
                    <p className="lg:text-[20px] text-[18px] font-normal text-dark lg:pt-[20px] pt-[20px]">
                        In dignissim ut tortor quam.
                        In et convallis suspendisse vel.
                        Urna, ante ut mauris, dolor interdum libero,
                        proin accumsan, vitae. In risus sit convallis volutpat.
                    </p>
                    <ul className="pl-10 list-disc lg:text-[20px] text-[18px] font-normal text-dark flex-grow lg:pt-[32px] pt-[20px]">
                        <li className="p-1">
                            Eget diam purus, a massa
                        </li>
                        <li className="p-1">
                            Ante ut mauris, dolor interdum
                        </li>
                        <li className="p-1">
                            Proin accumsan
                        </li>
                    </ul>
                    <div className="pt-[24px] lg:pt-[32px]">
                        <button
                            className="bg-transparent
                    hover:bg-red text-red 
                     font-semibold lg:text-[20px] text-[16px] hover:text-light 
                    lg:w-[155px] lg:h-[64px] w-[159px] h-[59px] border-2 border-red
                    hover:border-transparent rounded-full">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-dark flex flex-col lg:flex-row-reverse lg:pt-[120px] pt-[64px] items-center justify-center">
                <div className="relative lg:h-[440px] lg:w-[440px] h-[343px] w-[343px] flex-shrink-0 ">
                    <Image
                        src='/int2.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                <div className="flex lg:pr-[120px] lg:pl-0 flex-col pl-[16px]">
                    <h4 className="lg:text-[28px] text-[24px] font-bold text-dark pt-[32px]">
                        Id vel varius mauris morbi quis
                    </h4>
                    <p className="lg:text-[20px] text-[18px] font-normal text-dark lg:pt-[20px] pt-[20px]">
                        In dignissim ut tortor quam.
                        In et convallis suspendisse vel.
                        Urna, ante ut mauris, dolor interdum libero,
                        proin accumsan, vitae. In risus sit convallis volutpat.
                    </p>
                    <ul className="pl-10 list-disc lg:text-[20px] text-[18px] font-normal text-dark flex-grow lg:pt-[32px] pt-[20px]">
                        <li className="p-1">
                            Eget diam purus, a massa
                        </li>
                        <li className="p-1">
                            Ante ut mauris, dolor interdum
                        </li>
                        <li className="p-1">
                            Proin accumsan
                        </li>
                    </ul>
                    <div className="pt-[24px] lg:pt-[32px]">
                        <button
                            className="bg-transparent
                    hover:bg-red text-red 
                     font-semibold lg:text-[20px] text-[16px] hover:text-light 
                    lg:w-[155px] lg:h-[64px] w-[159px] h-[59px] border-2 border-red
                    hover:border-transparent rounded-full">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-dark flex flex-col lg:flex-row lg:pt-[120px] pt-[64px] items-center justify-center">
                <div className="relative lg:h-[440px] lg:w-[440px] h-[343px] w-[343px] flex-shrink-0 ">
                    <Image
                        src='/int3.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                <div className="flex lg:pl-[120px] flex-col pl-[16px]">
                    <h4 className="lg:text-[28px] text-[24px] font-bold text-dark pt-[32px]">
                        Id vel varius mauris morbi quis
                    </h4>
                    <p className="lg:text-[20px] text-[18px] font-normal text-dark lg:pt-[20px] pt-[20px]">
                        In dignissim ut tortor quam.
                        In et convallis suspendisse vel.
                        Urna, ante ut mauris, dolor interdum libero,
                        proin accumsan, vitae. In risus sit convallis volutpat.
                    </p>
                    <ul className="pl-10 list-disc lg:text-[20px] text-[18px] font-normal text-dark flex-grow lg:pt-[32px] pt-[20px]">
                        <li className="p-1">
                            Eget diam purus, a massa
                        </li>
                        <li className="p-1">
                            Ante ut mauris, dolor interdum
                        </li>
                        <li className="p-1">
                            Proin accumsan
                        </li>
                    </ul>
                    <div className="pt-[24px] lg:pt-[32px]">
                        <button
                            className="bg-transparent
                    hover:bg-red text-red 
                     font-semibold lg:text-[20px] text-[16px] hover:text-light 
                    lg:w-[155px] lg:h-[64px] w-[159px] h-[59px] border-2 border-red
                    hover:border-transparent rounded-full">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Initatives
