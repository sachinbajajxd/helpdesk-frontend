import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import RichPanelLogo from '../assets/richpanel-logo.jpg';
import { LiaPhoneAltSolid } from "react-icons/lia";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoAnalyticsSharp } from "react-icons/io5";
import AdminImage from '../assets/admin.jpg';
import UserImage from '../assets/user.jpg';

const Portal = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("myapp-token");

    if(!token){
        navigate("/login");
    }

  return (
    <div className='w-screen min-h-screen flex flex-row'>
      <div className='w-[5%] bg-[#3b5998] flex flex-col'>
        <div className='flex flex-col items-center'>
          <img src={RichPanelLogo} alt="Richpanel Logo" className='w-10 h-10 m-auto rounded-full mt-6'/>
          <div className=' mt-2 w-full bg-white pl-5'><FaInbox size={30} className='text-[#3b5997] mt-6 bg-white' /></div>
          <HiUsers size={30} className='text-white mt-6' />
          <IoAnalyticsSharp size={30} className='text-white mt-6' />
        </div>
        <div className='fixed bottom-0 flex items-center ml-5 mb-4'>
          <img src={AdminImage} alt="AdminImage" className='w-8 h-8 m-auto rounded-full mt-6 relative' />
          <div className="bg-green-600 w-3 h-3 rounded-full absolute bottom-0 right-0"></div>
        </div>

      </div>
      <div className='w-[20%] border border-gray-500 bg-white'>
        <div className='w-100 h-[10%] bg-white flex items-center content-center pl-4 border-b border-gray-500'>
          <MdOutlineFormatListBulleted size={20} className='mr-2 text-gray-700' />
          <p className='font-bold text-start text-2xl'>Conversations</p>
          <IoMdRefresh size={20} className='text-gray-500 ml-[3.5rem]' />
        </div>
        <div>
          <div className='bg-gray-200 pt-2'>
            <div className='flex flex-row'>
              <input
                type='checkbox'
                className='ml-2'
              />
              <div className='flex flex-col items-start ml-2'>
                <div className='text-md font-semibold text-gray-700'>Amit RG</div>
                <div className='text-sm font-semibold text-gray-600'>Facebook DM</div>
              </div>
              <div className='ml-[9rem] text-sm text-gray-700 font-semibold'>
                10m
              </div>
            </div>
            <p className='text-black mt-2 text-start text-sm ml-2'>Awesome Product</p>
            <p className='text-gray-700 mt-1 pb-2 text-start text-sm ml-2 text-nowrap'>Hey There! I probably did one of the best .....</p>
          </div>
          <div className='bg-white pt-2 border-b border-black'>
            <div className='flex flex-row'>
              <input
                type='checkbox'
                className='ml-2'
              />
              <div className='flex flex-col items-start ml-2'>
                <div className='text-md font-semibold text-gray-700'>Hiten Saxena</div>
                <div className='text-sm font-semibold text-gray-600'>Facebook Post</div>
              </div>
              <div className='ml-[9rem] text-sm text-gray-700 font-semibold'>
                10m
              </div>
            </div>
            <p className='text-black mt-2 text-start text-sm ml-2'>Available in store?</p>
            <p className='text-gray-700 mt-1 pb-2 text-start text-sm ml-2 text-nowrap'>Hi do you have any T-Shirt available in st.....</p>
          </div>
        </div>
      </div>
      <div className='w-[55%] border border-gray-500 bg-gray-100'>
        <div className='w-100 h-[10%] bg-white flex items-center pl-4'>
          <p className='font-bold text-start text-2xl'>Amit RG</p>
        </div>
        <div>
          <div className="flex items-start mb-4 p-4">
            <img src={UserImage} alt="User" className="w-10 h-10 rounded-full mr-4" />
            <div className="flex flex-col">
              <p className="font-semibold bg-white text-gray-700 text-sm p-2 mb-1  rounded-md">Is it in stock right now?</p>
              <div className="flex items-center">
                <p className="text-xs text-gray-600">Amit RG - </p>
                <span className="ml-2 text-xs text-gray-600">{moment(new Date()).format('MMM D, hh:mm A')}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end p-4 pb-0">
            <div className="flex flex-col items-end">
              <p className="font-semibold bg-white text-gray-700 text-sm p-2 mb-1  rounded-md">We've 3 left in stock!</p>
            </div>
            <div className='w-10 h-10 ml-4'></div>
          </div>
          <div className="flex items-start justify-end mb-4 p-4">
            <div className="flex flex-col items-end">
              <p className="font-semibold bg-white text-gray-700 text-sm p-2 mb-1  rounded-md">If you order before 8PM we can ship it today.</p>
              <div className="flex items-center">
                <p className="text-xs text-gray-600">Richard Panel - </p>
                <span className="ml-2 text-xs text-gray-600">{moment(new Date()).format('MMM D, hh:mm A')}</span>
              </div>
            </div>
            <img src={AdminImage} alt="Admin" className="w-10 h-10 rounded-full ml-4" />
          </div>
          

        </div>
        <div className='relative flex items-center content-center'>
          <input
            type='text'
            placeholder='   Message Hiten Saxena'
            className='w-[53%] h-12 m-auto border border-gray-500 rounded-md bg-white bottom-0 fixed left-[4.7rem] right-0 z-10 mb-4'
          />
        </div>
      </div>
      <div className='w-[20%] bg-gray-200 flex flex-col items-center'>
      <div className='h-[14rem] bg-white w-full pb-5'>
        <img src={UserImage} alt="Richpanel Logo" className='w-12 h-12 m-auto rounded-full mt-10'/>
        <p className='font-semibold text-md'>Amit RG</p>
        <div className="flex items-center content-center ml-[8rem] text-gray-500 text-xs mt-1">
          <span className="h-2 w-2 bg-gray-500 rounded-full mr-1"></span>
          <span>Offline</span>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <span className="flex items-center px-2 border border-gray-400"><LiaPhoneAltSolid className="mr-1" /> Call</span>
          <span className="flex items-center px-2 border border-gray-400"><FaCircleUser className="mr-1" /> Profile</span>
        </div>
      </div>
        <div className='w-[80%] p-2 mt-4 rounded-md bg-white'>
          <p className='font-semibold text-gray-500 text-md text-left'>Customer details</p>
          <div className='flex justify-between mt-2'><span className='text-left text-sm text-gray-500'>Email </span><span className='font-semibold text-gray-500 text-sm text-right'>amit@richpanel.com</span></div>
          <div className='flex justify-between mt-1'><span className='text-left text-sm text-gray-500'>First Name </span><span className='font-semibold text-gray-500 text-sm text-right'>Amit</span></div>
          <div className='flex justify-between mt-1'><span className='text-left text-sm text-gray-500'>Last Name </span><span className='font-semibold text-gray-500 text-sm text-right'>RG</span></div>
          <p className='mt-2 text-blue-700 text-left text-sm'>View more details</p>
        </div>
      </div>
    </div>
  )
}

export default Portal