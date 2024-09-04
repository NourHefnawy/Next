import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <div className="text-center my-8 space-y-[30px] max-sm:text-center max-sm:space-y-4 min-h-screen bg-black text-white py-10">
            <h1 className="font-SUSE text-[50px] font-bold leading-[72px] mx-auto mb-8 max-sm:text-[24px] max-sm:leading-[32px] max-sm:w-full max-sm:mx-0">
                Why Choose V.connct Webinar?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-full max-w-[1200px]">
                {/* Card 1 */}
                <div className="w-full max-w-[384px] h-[218px] p-6 bg-black rounded-lg shadow-md border border-white flex flex-col justify-between mx-auto max-sm:w-[90%] max-sm:h-[200px]">
                    <Image
                        src="/Vector.png"
                        alt="Webinar"
                        width={35}
                        height={35}
                        className="mb-4"
                    />
                    <h1 className="text-[24px] font-bold mb-4 text-left max-sm:text-[18px]">User-Friendly Interface</h1>
                    <p className="text-left max-sm:text-[14px]">Navigate effortlessly through our user-friendly interface.</p>
                </div>
                {/* Card 2 */}
                <div className="w-full max-w-[384px] h-[218px] p-6 bg-black rounded-lg shadow-md border border-white flex flex-col justify-between mx-auto max-sm:w-[90%] max-sm:h-[200px]">
                    <Image
                        src="/Vector6.png"
                        alt="Webinar"
                        width={35}
                        height={35}
                        className="mb-4"
                    />
                    <h1 className="text-[24px] font-bold mb-4 text-left max-sm:text-[18px]">Comprehensive Features</h1>
                    <p className="text-left max-sm:text-[14px]">Enjoy a wide array of features. Tailor each webinar to your unique needs.</p>
                </div>
                {/* Card 3 */}
                <div className="w-full max-w-[384px] h-[218px] p-6 bg-black rounded-lg shadow-md border border-white flex flex-col justify-between mx-auto max-sm:w-[90%] max-sm:h-[200px]">
                    <Image
                        src="/Vector2.png"
                        alt="Webinar"
                        width={35}
                        height={35}
                        className="mb-4"
                    />
                    <h1 className="text-[24px] font-bold mb-4 text-left max-sm:text-[18px]">Up to 5000 Participants</h1>
                    <p className="text-left max-sm:text-[14px]">Host anything from intimate seminars to grand conferences.</p>
                </div>
                {/* Card 4 */}
                <div className="w-full max-w-[384px] h-[218px] p-6 bg-black rounded-lg shadow-md border border-white flex flex-col justify-between mx-auto max-sm:w-[90%] max-sm:h-[200px]">
                    <Image
                        src="/Vector3.png"
                        alt="Webinar"
                        width={35}
                        height={35}
                        className="mb-4"
                    />
                    <h1 className="text-[24px] font-bold mb-4 text-left max-sm:text-[18px]">Live Stream Capabilities</h1>
                    <p className="text-left max-sm:text-[14px]">Connect with participants globally in real-time with our live streaming option.</p>
                </div>
                {/* Card 5 */}
                <div className="w-full max-w-[384px] h-[218px] p-6 bg-black rounded-lg shadow-md border border-white flex flex-col justify-between mx-auto max-sm:w-[90%] max-sm:h-[200px]">
                    <Image
                        src="/Vector4.png"
                        alt="Webinar"
                        width={35}
                        height={35}
                        className="mb-4"
                    />
                    <h1 className="text-[24px] font-bold mb-4 text-left max-sm:text-[18px]">30-Hour Webinar Duration</h1>
                    <p className="text-left max-sm:text-[14px]">Enjoy webinar durations for those in-depth discussions and comprehensive sessions.</p>
                </div>
                {/* Card 6 */}
                <div className="w-full max-w-[384px] h-[218px] p-6 bg-black rounded-lg shadow-md border border-white flex flex-col justify-between mx-auto max-sm:w-[90%] max-sm:h-[200px]">
                    <Image
                        src="/Vector5.png"
                        alt="Webinar"
                        width={35}
                        height={35}
                        className="mb-4"
                    />
                    <h1 className="text-[24px] font-bold mb-4 text-left max-sm:text-[18px]">Cloud Recording Storage</h1>
                    <p className="text-left max-sm:text-[14px]">Benefit from our cloud recording to ensure you never miss a crucial detail.</p>
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                <Link
                    href="/login"
                    className="font-Inter py-3 px-12 rounded-[8px] bg-[#F8B517] border border-[#B1A79B] text-black text-sm"
                >
                    Plans & Pricing
                </Link>
            </div>
        </div>
    );
};

export default About;
