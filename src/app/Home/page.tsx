import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div>
            <div className="my-8 space-y-[30px] text-center max-sm:text-center">
                <h1 className="font-SUSE text-[78px] font-bold leading-[96px] mx-auto w-full max-w-[1200px] h-auto 
                     max-sm:text-[24px] max-sm:leading-[32px] max-sm:tracking-[-0.48px] max-sm:mx-0">
                    All-in-One Solution for Effortless Webinar Hosting
                </h1>
                <p className="font-SUSE text-[20px] font-normal leading-[32px] mx-auto max-w-[1000px] w-full h-auto 
             sm:text-[16px] md:text-[18px] max-sm:text-[12px] max-sm:leading-[16px] max-sm:text-center max-sm:break-words">
                    Create immersive live Webinar experiences with everything you need. Join industry experts for a transformative learning experience and gain the audience you need.
                </p>

                <div className="flex justify-center gap-4 mt-4 max-sm:justify-center">
                    <Link
                        href="/login"
                        className="font-SUSE text-[20px] font-normal leading-[32px] py-1.5 px-6 rounded-[8px] bg-[#F8B517] border border-[#B1A79B] text-black
                   sm:text-[16px] sm:leading-[24px] max-sm:text-[12px] max-sm:leading-[16px] max-sm:px-4"
                    >
                        Plans & Pricing
                    </Link>
                    <Link
                        href="/register"
                        className="font-SUSE text-[20px] font-normal leading-[32px] py-1.5 px-6 rounded-[8px] bg-[#FFF] text-black border border-[#181613]
                   sm:text-[16px] sm:leading-[24px] max-sm:text-[12px] max-sm:leading-[16px] max-sm:px-4"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/hero section one web.png"
                    alt="Webinar"
                    width={1200}
                    height={750}
                />
            </div>
        </div>
    );
};

export default HeroSection;
