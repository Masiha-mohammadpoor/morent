import { carList } from "../../data/data";
import SingleCar from "./SingleCar";

const CarList = () => {
    const popularCar = (popular) => {
        if(popular){
            const popularCarFiltered = carList.filter(c => c.popular === true);
            return popularCarFiltered    
        }else {
            const RecomendationCar = carList.filter(c => c.popular === false);
            return RecomendationCar    
        }
    }
    return (
        <section className="mt-20 mx-20 pb-10">
            <article>
            <div className="mb-7 mx-8 flex justify-between items-center">
                <p className="text-gray-500">Popular Car</p>
                <button className="text-blue-600">View All</button>
            </div>
            <div className="grid justify-between gap-y-7 grid-cols-12">
            {
                popularCar(true).map(c => {
                    return <SingleCar
                            name={c.name}
                            liked={c.liked}
                            category={c.category}
                            image={c.image}
                            tankVolume={c.tankVolume}
                            capacity={c.capacity}
                            rentPrice={c.rentPrice}
                        />
                })
            }
            </div>
            </article>
            {/*  Recomendation Car  */}
            <article className="mt-12">
            <div className="mb-7 mx-8 flex justify-between items-center">
                <p className="text-gray-500">Recomendation Car</p>
                <button className="text-blue-600">View All</button>
            </div>
            <div className="grid justify-between gap-y-7 grid-cols-12">
            {
                popularCar(false).map(c => {
                    return <SingleCar
                            key={c.id}
                            name={c.name}
                            liked={c.liked}
                            category={c.category}
                            image={c.image}
                            tankVolume={c.tankVolume}
                            capacity={c.capacity}
                            rentPrice={c.rentPrice}
                        />
                })
            }
            </div>
            </article>
            {/* show more button */}
            <div className="flex justify-center mt-10">
            <button className=" text-white bg-blue-600 rounded-md py-2 px-3">Show More ...</button>
            </div>
        </section>
    );
}
 
export default CarList;