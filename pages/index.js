import Head from 'next/head'
import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'

//Icons
import {HiChevronDown} from 'react-icons/hi'
import {FiMail} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const servicesRef = useRef(null);
  const getInTouchRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const email = "sphe.g.personal@gmail.com";
  const Email = () => {
    window.location.href = `mailto:${email}`;
  };

  const closePopup = () => {
    // setShowPopup(false);
    setPopupAnimation({ 
      from: { opacity: 1, transform: 'translateY(0)' },
      to: { opacity: 0,transform: 'translateY(250px)' }
     });
  };

  //Animation
  const [popupAnimation, setPopupAnimation] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400
  }));

  return (
    <>
      <Head>
        <title>Sustainable</title>
        <meta name="description" content="Take action, let's get more eyes on your brand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Newsletter Pop-Up */}
      {showPopup && (
        <div className='w-full h-[100%] fixed flex justify-start items-end'>
          <animated.div style={popupAnimation} className="bg-black rounded-2xl w-full fixed md:w-[600px] h-fit md:h-[300px] shadow-2xl p-6 py-8 md:p-10">
            <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
              <div className='w-full'>
                <h2 className='text-xl md:text-4xl text-white '>Get our FREE weekly newsletter</h2>
                {/* <p className='text-[#9CA3AF]'>Get FREE marketing resources sent to you every Monday</p> */}
                <div className='border-2 rounded-full border-white p-2 pl-5 flex justify-between mt-5 md:mt-10'>
                  <input className='bg-transparent outline-none text-white w-full' placeholder="Email Address"/>
                  <button className='bg-white text-black p-2 rounded-full' onClick={closePopup}>
                    Subscribe
                  </button>
                </div>
              </div>
              <span className="cursor-pointer hidden md:flex" onClick={closePopup}>
                <RxCross2 size={25} className='bg-black text-white rounded-full p-1'/>
              </span>
              <button className='bg-white mt-5 rounded-full p-2 text-center md:hidden' onClick={closePopup}>
                Close
              </button>
            </div>
          </animated.div>
        </div>
        
      )}
      
      {/* NavBar */}
      <div className='flex justify-between items-center m-6'>
        <div className='flex gap-9'>
          <h1 className='logo'>Sustainable</h1>
          <button className='text-[14px] hidden md:flex uppercase font-medium justify-center items-center' onClick={() => scrollToRef(servicesRef)}>
            Services
            <HiChevronDown size={18}/>
          </button>
          {/* <button className='text-[14px] hidden md:flex uppercase font-medium justify-center items-center'>
            Plans
            <HiChevronDown size={18}/>
          </button> */}
          <button className='text-[14px] hidden md:flex uppercase font-medium justify-center items-center' onClick={() => scrollToRef(getInTouchRef)}>
            Get in touch
            <HiChevronDown size={18}/>
          </button>
        </div>
        <button className='bg-black px-3 py-1 text-white rounded-full font-medium uppercase' onClick={() => window.open("https://www.instagram.com/xpc_marketing/")}>Contact Us</button>
      </div>

      {/* Hero */}
      <div className='bg-black mx-5'>
        <div className='bg-[#f3f3f5] rounded-3xl border border-black p-10'>
          <h1 className='heroh1 text-[3.5rem] md:text-[5.4rem] leading-[4rem] md:leading-[6.4rem]'>
            Breaking <br/> marketing <br/>barriers
          </h1>
          <div className='flex gap-4 mt-11'>
            <button className='bg-black text-white rounded-full px-[50px] text-[15px] md:text-[20px]' onClick={() => window.open("https://www.instagram.com/xpc_marketing/")}>
              Get in touch
            </button>
            <button className='border border-black text-black rounded-full p-2' onClick={Email}>
              <FiMail size={35} className='p-[0.5rem]'/>
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='flex flex-col mx-5 md:flex-row' ref={servicesRef} id="services">
        <div className='bg-black w-full'>
          <div className='bg-[#f3f3f5] h-[300px] rounded-3xl border border-black p-10 flex flex-col gap-10'>
            <div className='border border-[#BBBBBB] h-[30px] w-[30px] rounded-md flex justify-center items-center'>
              <div className='chart h-[15px] w-[15px]'/>
            </div>
            <div>
              <h1 className='text-[1.2rem] lg:text-[1.5rem] font-medium'>Earning traffic</h1>
              <p className='text-[0.7rem] lg:text-[0.8rem] text-[#424148]'>
                Marketing is all about driving traffic
                and generating leads. Without targeted
                traffic, a website is essentially worthless.
                That{"'"}s why our team of experienced marketers
                partners with you to identify your ideal customer
                and get to work promoting your brand.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-black w-full'>
          <div className='bg-[#f3f3f5] h-[300px] rounded-3xl border border-black p-10 flex flex-col gap-10'>
            <div className='border border-[#BBBBBB] h-[30px] w-[30px] rounded-md flex justify-center items-center'>
              <div className='paint h-[15px] w-[15px]'/>
            </div>
            <div>
              <h1 className='text-[1.2rem] lg:text-[1.5rem] font-medium'>Design that dazzles</h1>
              <p className='text-[0.7rem] lg:text-[0.8rem] text-[#424148]'>
              Your business is unique and you need a
              website that can help separate you from
              the competition. Our interactive
              team lays the creative groundwork for
              your digital presence with a cutting-edge
              website design.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-black w-full'>
          <div className='bg-[#f3f3f5] h-[300px] rounded-3xl border border-black p-10 flex flex-col gap-10'>
            <div className='border border-[#BBBBBB] h-[30px] w-[30px] rounded-md flex justify-center items-center'>
              <div className='rocket h-[15px] w-[15px]'/>
            </div>
            <div>
              <h1 className='text-[1.2rem] lg:text-[1.5rem] font-medium'>Expand your social reach</h1>
              <p className='text-[0.7rem] lg:text-[0.8rem] text-[#424148]'>
              Connectivity and online interaction are a
              must for any company focused on
              growth. Our team of social media experts
              can create a social media management
              plan that gets the right message in front
              of your desired audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className='bg-black mx-5' ref={getInTouchRef} id="getintouch">
        <div className='bg-[#f3f3f5] rounded-3xl border border-black p-10 flex flex-col justify-center items-center'>
          <h1 className='heroh1 text-center text-[1.6rem] md:text-[3.4rem] leading-normal md:leading-[6.4rem]'>
            What are you waiting for?
          </h1>
          <p className='text-[0.8rem] md:text-[1rem]'>Take action, let{"'"}s get more eyes on your brand</p>
          <div className='flex gap-4 mt-11'>
            <button className='bg-black text-white rounded-full px-[50px] p-3 text-[15px] md:text-[20px]' onClick={() => window.open("https://www.instagram.com/xpc_marketing/")}>
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='p-5 flex justify-center items-center'>
        <p>© 2023 All rights reserved.</p>
      </div>
    </>
  )
}
