import { CiSearch, CiBellOn, CiFilter, CiHeart, CiSettings } from "react-icons/ci";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import useImg from "../assets/image/user.jpg";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-5 shadow-none md:shadow-lg">
            {/* Header mobile*/}
            <div className="md:hidden flex flex-col w-full p-3">
                <div className=" md:hidden flex justify-between items-center mb-8">
                    <h1 className="text-blue-600 text-2xl font-bold mr-20">MORENT</h1>
                    {/* image */}
                    <div className="sm:flex hidden flex-1 items-center justify-end">
                        <div className="flex justify-between items-center w-80 px-8">
                            <CiHeart size={20} />
                            <span className="relative">
                                <CiBellOn size={20} />
                                <span className="inline-block w-2 h-2 rounded-full bg-red-600 absolute -top-1 -right-1"></span>
                            </span>
                            <CiSettings size={20} />
                            <img src={useImg} alt="user..." className="w-9 h-9 rounded-full object-cover" />
                        </div>
                    </div>

                    <img src={useImg} alt="user..." className="block sm:hidden w-9 h-9 rounded-full object-cover" />
                </div>
                {/* input */}
                <div className="md:hidden flex justify-center w-full">
                    <div className="flex w-4/5 items-center ring-1 ring-gray-300 px-2 rounded-md">

                        <CiSearch size={25} className="text-gray-500 cursor-pointerij" />
                        <input type="text" placeholder="search something here..." className="bg-transparent mx-4 w-full py-2 outline-none" />
                    </div>
                    <button className="ring-1 ring-gray-300 p-2 rounded-md ml-3">
                        <HiMiniAdjustmentsHorizontal size={25} className="text-gray-500 cursor-pointerij" />
                    </button>
                </div>
            </div>

            {/* Header */}
            <div className="md:flex hidden md:flex-1 justify-between items-center px-8">
                <h1 className="text-blue-600 text-2xl font-bold mr-20">MORENT</h1>
                <div className="flex flex-1 items-center ring-1 ring-gray-300 px-2 rounded-full">

                    <CiSearch size={25} className="text-gray-500 cursor-pointerij" />
                    <input type="text" placeholder="search something here..." className="bg-transparent mx-4 w-full py-2 outline-none" />

                    <HiMiniAdjustmentsHorizontal size={25} className="text-gray-500 cursor-pointerij" />
                </div>
            </div>
            {/* panel */}
            <div className="md:flex hidden flex-1 items-center justify-end">
                <div className="flex justify-between items-center w-80 px-8">
                    <CiHeart size={20} />
                    <span className="relative">
                        <CiBellOn size={20} />
                        <span className="inline-block w-2 h-2 rounded-full bg-red-600 absolute -top-1 -right-1"></span>
                    </span>
                    <CiSettings size={20} />
                    <img src={useImg} alt="user..." className="w-9 h-9 rounded-full object-cover" />
                </div>
            </div>
        </header>
    );
}

export default Header;