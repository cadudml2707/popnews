import { FaStar } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { RiNewsFill } from "react-icons/ri";
import { PiPopcornFill } from "react-icons/pi";

import Logo from '@/assets/images/popnews.png';

export default function NavigationMenuBar() {
    return (
        <div className="flex w-full justify-center items-center bg-gray-800 w-full p-5 gap-20 sm:p-6">
            <img src={Logo} alt="Logo" className='h-10 w-10' />
            <div className="flex justify-center items-center gap-2 hover:text-yellow-500 cursor-pointer transition">
                <FaStar size={20} />
                <h2 className="font-bold text-lg">Entretenimento</h2>
            </div>
            <div className="flex justify-center items-center gap-2 hover:text-purple-500 cursor-pointer transition">
                <FaMusic size={20} />
                <h2 className="font-bold text-lg">Música</h2>
            </div>
            <div className="flex justify-content items-center gap-2 hover:text-red-500 cursor-pointer transition">
                <RiNewsFill size={20} />
                <h2 className="font-bold text-lg">Notícias</h2>
            </div>
            <div className="flex justify-center items-center gap-2 hover:text-pink-500 cursor-pointer transition">
                <PiPopcornFill size={20} />
                <h2 className="font-bold text-lg">Série e Cinema</h2>
            </div>
        </div>
    )
}