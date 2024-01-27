import { FaHeart , FaRegHeart , FaGasPump , FaLifeRing , FaUserFriends } from "react-icons/fa";
// import konigseg from "../assets/image/konigseg.png";


const SingleCar = ({name , liked , category , image , tankVolume , capacity , rentPrice}) => {
    return (
        <div className="bg-white rounded-md col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 md:scale-95 mx-auto w-64 p-5">
            <div className="flex justify-between items-center">
                <p className="font-bold">{name}</p>
                <button>
                    {liked ?<FaHeart className="text-red-600"/> :<FaRegHeart className="text-gray-500"/>}
                </button>
            </div>
            <p className="text-sm text-gray-500">{category}</p>
            <div className="mt-7 flex justify-center">
                <img src={image} alt={name} className="w-56"/>
            </div>
            <div className="flex justify-between items-center mt-8">
            <p className="flex flex-auto justify-center  text-xs text-gray-500 items-center"><FaGasPump size={15} className="mr-1"/> {tankVolume}L</p>
            <p className="flex flex-auto justify-center  text-xs text-gray-500 items-center"><FaLifeRing size={15} className="mr-1"/> Manual</p>
            <p className="flex flex-auto justify-center  text-xs text-gray-500 items-center"><FaUserFriends size={15} className="mr-1"/> {capacity}People</p>
            </div>
            <div className="mt-7 flex justify-between items-center">
                <h3 className="flex items-end">
                    <h3 className="font-bold text-lg">${rentPrice}/</h3>
                    <small className="text-gray-400 text-xs">day</small>
                </h3>
                <button className="bg-blue-600 rounded-md text-white py-2 px-3">Rent Now</button>
            </div>
        </div>
    );
}
 
export default SingleCar;