import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Article = () => {
  return (
    <div className="text-center my-8 space-y-[30px] max-sm:text-center max-sm:space-y-4">
      <h1 className="font-SUSE text-[60px] font-bold leading-[72px] mx-auto max-sm:text-[24px] max-sm:leading-[32px] max-sm:w-full max-sm:mx-0">
        Get to Know V.Connct Webinar
      </h1>
      <p className="font-inter text-[20px] font-normal leading-[32px] mx-auto max-w-[1000px] w-full h-auto 
        sm:text-[16px] md:text-[19px] max-sm:text-[12px] max-sm:leading-[16px] max-sm:text-center max-sm:break-words max-sm:mx-0">
        Explore the seamless flow of V.connct webinars, ensuring a smooth experience for both hosts and participants.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mx-auto w-full max-w-[1200px]">
        <div className="md:col-span-2 space-y-6">
          {/* Card 1 */}
          <div className="w-full max-w-[384px] h-[400px] p-3 bg-white rounded-lg shadow-md border border-black flex flex-col space-y-4 mx-auto mr-[100px] max-sm:w-[300px] max-sm:ml-[10px]">
            <h2 className='font-bold text-[24px] font-SUSE'>Webinar Schedule</h2>
            <p>Plan your events with precision, ensuring that your audience knows when to tune in.</p>
            <div className="flex justify-center items-center ">
              <Image
                src="/Rectangle 15.png"
                alt="Webinar"
                width={352}
                height={268}
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full max-w-[384px] h-[228px] p-3 bg-white rounded-lg shadow-md border border-black flex flex-col space-y-4 mx-auto mr-[100px] max-sm:w-[300px] max-sm:ml-[10px]">
            <h2 className='font-bold text-[24px] font-SUSE'>Brand Identity</h2>
            <div className="flex justify-center items-center h-full">
              <Image
                src="/Rectangle 15 (1).png"
                alt="Webinar"
                width={352}
                height={140}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col space-y-6 items-center md:ml-[-75px] ">
          {/* Card 3 */}
          <div className="w-[390px]  h-[652.8px] bg-white rounded-lg shadow-md border border-black flex flex-col space-y-4 mx-auto  max-sm:w-[300px]">
            <div className="flex flex-col justify-center items-center h-full space-y-4">
              <Image
                src="/Rectangle 15 (2).png"
                alt="Webinar"
                width={352}
                height={236}
              />
              <h2 className='font-bold text-[24px] font-SUSE'>Register Form</h2>
              <p className=' text-[17px]'>Easily collect participant information with our user-friendly registration forms.</p>
              <Image
                src="/Rectangle 16.png"
                alt="Webinar"
                width={352}
                height={236}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          {/* Card 4 */}
          <div className="w-full max-w-[384px] h-[230px] p-2 bg-white rounded-lg shadow-md border border-black mx-auto md:ml-[100px] max-sm:w-[300px]">
            <h2 className='font-bold text-[24px] font-SUSE'>Shareable Card</h2>
            <div className="flex justify-center items-center">
              <Image
                src="/Rectangle 15 (3).png"
                alt="Webinar"
                width={352}
                height={140}
              />
            </div>
          </div>
          {/* Card 5 */}
          <div className="w-full max-w-[384px] h-[399px] p-2 bg-white rounded-lg shadow-md border border-black mx-auto md:ml-[100px] max-sm:w-[300px]">
            <h2 className='font-bold text-[24px] font-SUSE'>Email Notifications</h2>
            <p>Keep participants informed with emails for registration confirmation, webinar start & end.</p>
            <div className="flex justify-center items-center">
              <Image
                src="/Rectangle 15 (4).png"
                alt="Webinar"
                width={352}
                height={268}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Link
          href="/login"
          className="font-Inter py-3 px-12 rounded-[8px] bg-black border border-[#B1A79B] text-white text-sm"
        >
          Plans & Pricing
        </Link>
      </div>

    </div>
  );
};

export default Article;
