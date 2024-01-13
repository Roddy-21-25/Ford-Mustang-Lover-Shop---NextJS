import loadCars from "@/lib/loadCars";
import CarDetails from "@/components/Cars/CarDetails";
import HeaderDay from "@/components/Header/HeaderDay";
import { CinzelBolder } from "@/utilities/Font";

import style from '@/ModuleStyles/carPage.module.css'

import Image from 'next/image';

import srcImageCarDetails from '@/data/srcImageCarDetails';

async function CarPage({ params }) {
    const loadData = await loadCars()
    const TwoCars = loadData.sort(() => Math.random() - 0.5).slice(0, 2);
    const car = loadData.filter((info) => info.Id == params.id)[0]

    return (
        <div>
            <CarDetails promise={car} />
            <div className={`grid grid-cols-2 xl:grid-cols-3 ${style.boxColor}`}>
                {
                    srcImageCarDetails.map((info, i) => (
                        <div key={i}
                            className={`grid grid-cols-1 lg:grid-cols-2 mx-3 mt-3 rounded-lg justify-items-stretch xl:mt-8 mb-6 p-3 ${style.box}`}>
                            <div className={`justify-self-center mt-2 lg:mt-0`}>
                                <Image alt={`${info.alt}`} src={`${info.src}`} width={30} height={70}></Image>
                            </div>
                            <div className={`${style.color} justify-self-stretch pt-1 text-center mt-2 lg:mt-0`}>
                                <p><strong>{info.textOne}</strong></p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <h1 className={`my-8 text-center text-4xl ${style.color} ${CinzelBolder.className}`}>
                    Others Models
                </h1>
                <HeaderDay promise={TwoCars} />
            </div>
        </div>
    )
}

export default CarPage