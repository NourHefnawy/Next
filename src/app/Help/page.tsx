import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

const Help = () => {
    return (
        <div >
            <div className='w-full bg-[#FFF4E5] flex flex-col items-center p-6 sm:p-12'>
                <div className='w-full max-w-[1000px] sm:max-w-[1400px] h-auto sm:h-[230px] p-6 sm:p-[40px] mx-4 sm:mx-[50px] bg-white border border-black rounded-[8px] flex flex-col justify-center'>
                    <h1 className='font-bold text-[24px] sm:text-[30px] font-SUSE mb-[12px] sm:mb-[18px] leading-[28px] sm:leading-[40px] text-center sm:text-left'>
                        Need Help! Webinar Documentation
                    </h1>
                    <p className='font-SUSE text-[14px] sm:text-[15px] leading-[20px] sm:leading-[24px] mb-[12px] sm:mb-[24px] text-center sm:text-left'>
                        Need production help? Webinar Documentation has you covered. We can help ensure your next webinar goes off
                        <br />
                        without a hitch.
                    </p>
                    <div className='flex items-center justify-center sm:justify-start'>
                        <div className='flex items-center border-b-2 border-black pb-1'>
                            <h4 className='font-bold text-[14px] sm:text-[16px] font-SUSE'>
                                Help Center
                            </h4>
                            <GoArrowRight className='ml-2 text-[16px] sm:text-[20px]' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-[40px]'>
                <Image
                    src="/Organizations.png"
                    alt="Webinar"
                    width={1440}
                    height={322}
                    className="mb-4"
                />
            </div>
            <div className='w-full bg-white flex flex-col p-6 sm:p-12'>
                <h1 className='font-bold text-[30px] sm:text-[30px] font-SUSE mb-[24px] text-center sm:text-center'>
                    FAQs
                </h1>
                <div className='w-full max-w-[800px] px-4 sm:px-[70px]'>
                    <div className='mb-4 sm:mb-[24px]'>
                        <h2 className='text-[18px] sm:text-[20px] font-SUSE mb-2'>
                            How many participants can I host in a webinar?
                            <IoIosArrowDown className='ml-2 sm:ml-[1300px] text-yellow-500 text-[18px] sm:text-[20px]' />
                        </h2>
                        <hr className='border-t-2 border-[#A7A9AC] mb-2 sm:w-[200%] w-[100%] mx-auto' />
                        <p className='text-[14px] sm:text-[15px] font-SUSE'>
                            V.connct supports up to 5000 participants, offering scalability for events of any size.
                        </p>
                    </div>

                    <div className='mb-4 sm:mb-[24px]'>
                        <h2 className='text-[18px] sm:text-[20px] font-SUSE mb-2'>
                            Can I live stream my webinars?
                            <IoIosArrowDown className='ml-2 sm:ml-[1300px] text-yellow-500 text-[18px] sm:text-[20px]' />
                            {/* <IoIosArrowDown className='ml-auto sm:ml-[1300px] text-yellow-500 text-[20px] mt-[-20px]' /> */}
                        </h2>
                        <hr className='border-t-2 border-[#A7A9AC] mb-2 sm:w-[200%] w-[100%] mx-auto' />
                        <p className='text-[14px] sm:text-[15px] font-SUSE'>
                            Absolutely! Enjoy the benefits of reaching a wider audience in real-time.
                        </p>
                    </div>

                    <div className='mb-4 sm:mb-[24px]'>
                        <h2 className='text-[18px] sm:text-[20px] font-SUSE mb-2'>
                            How long can a webinar last?
                            <IoIosArrowDown className='ml-2 sm:ml-[1300px] text-yellow-500 text-[18px] sm:text-[20px]' />
                        </h2>
                        <hr className='border-t-2 border-[#A7A9AC] mb-2 sm:w-[200%] w-[100%] mx-auto' />
                        <p className='text-[14px] sm:text-[15px] font-SUSE'>
                            Webinars can extend up to 30 hours, providing flexibility for various event durations.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-[18px] sm:text-[20px] font-SUSE mb-2'>
                            Are email notifications automated?
                            <IoIosArrowDown className='ml-4 sm:ml-[1300px] text-yellow-500 text-[18px] sm:text-[20px]' />
                        </h2>
                        <hr className='border-t-2 border-[#A7A9AC] mb-2 sm:w-[200%] w-[100%] mx-auto' />
                        <p className='text-[14px] sm:text-[15px] font-SUSE'>
                            Yes, V.connct sends automated emails for registration, start, and end times.
                        </p>
                    </div>
                </div>

            </div>
            <div className='w-full bg-black'>
                <h1 className='text-[30px] sm:text-[30px] font-bold flex justify-center gap-2 mt-4 text-white p-[20px]'>
                    Ready to Elevate Your Webinars?
                </h1>
                <div className="flex justify-center gap-2 mt-4">
                    <Link
                        href="/login"
                        className="font-bold m-5 py-3 px-12 rounded-[8px] bg-[#F8B517] border border-[#B1A79B] text-black text-lg"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Help;
