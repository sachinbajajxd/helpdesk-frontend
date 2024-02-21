import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("myapp-token");
    const [isAccountLinked, setIsAccountLinked] = useState(false);

    if(!token){
        navigate("/login");
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#3b5998]'>
    {!isAccountLinked ? (
        <div className="bg-white p-10 pb-4 rounded-2xl shadow-lg w-96 flex flex-col items-center justify-center">
            <div className='p-4 font-semibold'>Facebook Page Integration</div>
            <button className='bg-[#3b5998] py-[.5rem] mb-2 px-12 rounded-sm text-white mt-4 w-[19rem]' onClick={() => setIsAccountLinked(true)}>
                Connect Page
            </button>
        </div>
    ) : (
        <div className="bg-white p-10 pb-4 rounded-2xl shadow-lg w-96 flex flex-col items-center justify-center">
          <div className='p-4 font-semibold'>Facebook Page Integration</div>
          <div className=''>Integrated Page: <span className='font-semibold'>Amazon Business</span></div>
          <button className=' bg-red-500 py-[.5rem] px-12 rounded-sm text-white mt-8 w-[19rem]' onClick={() => setIsAccountLinked(false)}>
                Delete Integration
          </button>
          <Link to='/portal' className='bg-[#3b5998] py-[.5rem] mb-2 px-12 rounded-sm text-white mt-4 w-[19rem]' onClick={() => setIsAccountLinked(true)}>
              Reply To Messages
          </Link>
        </div>
    )}
    </div>
  )
}

export default Home