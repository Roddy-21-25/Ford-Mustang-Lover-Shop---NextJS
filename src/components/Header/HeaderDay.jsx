import { Suspense } from "react";
import Image from "next/image";

import Link from "next/link";

import styles from '@/ModuleStyles/headerDay.module.css'

async function HeaderDay({ promise }) {
    return (
        <>
            <Suspense fallback="loading...">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center p-4">
                    {promise.map((car, i) => (
                        <div key={i}>
                            <div className={`grid grid-cols-2 ${styles.box} p-2 rounded-lg h-5/5`}>
                                <div className="col-span-2 sm:col-span-1">
                                    <h1 className="mb-2 mt-1 ml-2 text-black/90 bg-yellow-200 px-4 rounded-md font-bold w-fit">
                                        <em>For Sale</em>
                                    </h1>
                                    <Image src={`${car.MainImgUrl}`} className="rounded-xl"
                                        alt={`img with the model ${car.name}`}
                                        width={600} height={400} />
                                </div>
                                <div className="p-2 col-span-2 sm:col-span-1">
                                    <h1 className="text-center text-lg">
                                        <strong>{car.name}</strong>
                                    </h1>
                                    <p className="text-center mt-1">
                                        <span className={`text-xl font-bold ${styles.color}`}>${car.price.toLocaleString()} </span>
                                        <span className={`text-red-600 line-through`}>{(car.price + 10000).toLocaleString()}</span>
                                    </p>
                                    <p className={`text-sm ${styles.textBox} rounded-lg p-3 mt-2`}>{car.SpecialPackage}</p>
                                    <h1 className={`mb-2 mt-2 ml-2 text-white ${styles.bg} px-4 rounded-md font-bold w-fit`}>
                                        Available : 1
                                    </h1>
                                </div>
                                <div className="justify-self-end col-span-2">
                                    <Link href={`/cars/${car.Id}`}>
                                        <button className={`${styles.btn} p-2 m-2 w-60`}>Shop Now!</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Suspense>
        </>
    )
}

export default HeaderDay