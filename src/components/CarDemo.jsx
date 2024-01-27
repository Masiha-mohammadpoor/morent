import konigseg from "../assets/image/konigseg.png";
import neissan from "../assets/image/neissan gtr.png";
import { FaAngleDown } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";


const CarDemo = () => {
    return (
        <section>
        {/* car demo */}
        <article className="flex justify-center items-center md:mt-5 pt-0">
            {/* car demo 1 */}
            <div className="-mt-10 md:mt-8 scale-75 md:scale-100 car-demo1 flex flex-col justify-between items-start flex-1 md:ml-28 md:mr-3  p-4 rounded-md h-76">
                <h2 className=" mb-3 font-bold text-2xl leading-8 text-white">The best platform <br/> for car rental</h2>
                <p className="w-80 text-white text-md mb-3">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button className="py-3 px-4 text-white rounded-md bg-blue-400">Rental Car</button>
                <div className="w-full flex justify-center">
                    <img src={konigseg} alt="konigseg" className="w-72 h-20 object-cover"/>
                </div>
            </div>
            {/* car demo 2 */}
            <div className="-mt-10 md:mt-8 car-demo2 hidden md:flex flex-col justify-between items-start md:flex-1 mr-28 ml-3  p-4 rounded-md h-76">
            <h2 className=" mb-3 font-bold text-2xl leading-8 text-white">Easy way to rent a <br/> car at a low price</h2>
                <p className="w-80 text-white text-md mb-3">Providing cheap car rental services and safe and comfortable facilities.</p>
                <button className="py-3 px-4 text-white rounded-md bg-blue-600">Rental Car</button>
                <div className="w-full flex justify-center">
                    <img src={neissan} alt="neissan" className="w-72 h-20 object-cover"/>
                </div>
            </div>
        </article>
        {/* location & date */}
        <article className="flex flex-col md:flex-row justify-between items-center mt-5 mx-28 gap-x-3">
            {/* 1 */}
            <div className="w-80 overflow-x-scroll md:overflow-x-auto md:w-auto flex bg-white rounded-md flex-1 flex-col p-3">
                <div className="mb-4 ml-2">
                    <input type="radio" checked className="mr-2"/>
                    Pick-Up
                </div>
                <div className="flex justify-between items-center px-2">
                    <div>
                        <p className="text-sm">Locations</p>
                        <p className="flex w-40 items-center justify-between">
                            <span className="text-sm text-gray-600">select your city</span>
                            <FaAngleDown/>
                        </p>
                    </div>
                    <div>
                    <p className="text-sm">Date</p>
                        <p className="flex w-40 items-center justify-between">
                            <span className="text-sm text-gray-600">select your date</span>
                            <FaAngleDown/>
                        </p>

                    </div>
                    <div>
                    <p className="text-sm">Time</p>
                        <p className="flex w-40 items-center justify-between">
                            <span className="text-sm text-gray-600">select your time</span>
                            <FaAngleDown/>
                        </p>

                    </div>
                </div>
            </div>
            {/* button */}
            <button className="my-2 p-3 rounded-md bg-blue-500 text-white text-lg"><HiArrowPath/></button>
            {/* 2 */}
            <div className="w-80 md:w-auto overflow-x-scroll flex bg-white rounded-md flex-1 flex-col p-3">
                <div className="mb-4 ml-2">
                    <input type="radio" checked className="mr-2"/>
                    Drop-Off
                </div>
                <div className="flex justify-between items-center px-2">
                    <div>
                        <p className="text-sm">Locations</p>
                        <p className="flex w-40 items-center justify-between">
                            <span className="text-sm text-gray-600">select your city</span>
                            <FaAngleDown/>
                        </p>
                    </div>
                    <div>
                    <p className="text-sm">Date</p>
                        <p className="flex w-40 items-center justify-between">
                            <span className="text-sm text-gray-600">select your date</span>
                            <FaAngleDown/>
                        </p>

                    </div>
                    <div>
                    <p className="text-sm">Time</p>
                        <p className="flex w-40 items-center justify-between">
                            <span className="text-sm text-gray-600">select your time</span>
                            <FaAngleDown/>
                        </p>

                    </div>
                </div>
            </div>

        </article>
        </section>
    );
}

export default CarDemo;