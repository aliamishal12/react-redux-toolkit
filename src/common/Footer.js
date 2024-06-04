import React from 'react';
import { footer, aweicon } from "../data/Data";
import "./../main.css";

const Footer = () => {
  return (
    <div className='bg-white text-black py-8 px-4'>
      <div className='flex justify-between'>
        <div className='w-1/2'>
          <div className='flex justify-around uppercase'>
            {footer.map((val, index) => (
              <div key={index}>
                <div className='text-2xl font-semibold mb-2'>{val.header}</div>
                <div className='flex flex-col'>
                  {val.title.map((item, key) => (
                    <span key={key} className='mr-2 mb-2 hover:text-red-500 cursor-pointer'>{item.subtitle}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2 p-6 bg-gray-100 rounded-lg shadow-md'>
          <h1 className='text-2xl font-semibold mb-4'>SIGN UP FOR NEWSLETTER</h1>
          <p className=' text-gray-600 mb-4'>
            Don't miss out on exciting promotions and the latest shopping news</p>
          <input type='text' name='text' placeholder="Your Email Address" className='w-2/3 p-4 border-gray-300 rounded mb-4 ' />
          <button 
          type='button' className='bg-black text-white pt-4 pb-4 p-4 ml-4 rounded hover:bg-red-500'>SUBSCRIBE</button>
          <div className='flex text-center'>
            {aweicon.slice(2, 6).map((val, index) => (
              <div key={index} className='bg-white p-2 pr-4 pl-4 mr-2 text-2xl hover:bg-red-500 hover:text-white duration-300'>
                {val.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

