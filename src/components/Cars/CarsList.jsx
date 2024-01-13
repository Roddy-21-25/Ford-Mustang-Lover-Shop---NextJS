"use client"

import useCarList from '@/hooks/useCarList';

import Image from 'next/image';
import Link from 'next/link';

import style from '@/ModuleStyles/carList.module.css'

import carOptions from '@/data/carOptions';
import thCarListData from '@/data/thCarListData'

import Th from './Th';

function CarsList({ promise }) {

    const {
        currentPage,
        selectedOption,
        totalPages,
        groupedPromise,
        nextPage,
        prevPage,
        handleChange,
    } = useCarList(promise);

    return (
        <div>
            <div className="max-w-md mx-auto p-4">
                <div className="relative mt-1">
                    <select
                        id="select"
                        name="select"
                        value={selectedOption}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 
                        px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                    >
                        <option value="" disabled hidden>
                            Sort By Category
                        </option>
                        {carOptions.map((car, index) => (
                            <option key={index} value={car}>
                                {car}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 xl:gap-4 p-4'>
                {groupedPromise[currentPage].map((info, i) => (
                    <div key={i}>
                        <div className='shadow-md mt-4 w-80 md:w-auto h-96 md:h-full xl:h-full rounded-lg'>
                            <div>
                                <Image className='rounded-t-lg' src={info.MainImgUrl}
                                    alt={`${info.name}`}
                                    width={400} height={100} />
                            </div>
                            <div className='text-center mt-2 text-sm'>
                                {info.name}
                            </div>
                            <div>
                                <div class="flex flex-col">
                                    <div class="p-2 xl:p-3 -m-1.5 overflow-x-auto">
                                        <div class="min-w-full inline-block align-middle">
                                            <div class="border rounded-lg overflow-hidden dark:border-gray-700">

                                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                    <thead>
                                                        <tr>
                                                            {
                                                                thCarListData.map((info, i) => (
                                                                    <Th key={i} data={info} />
                                                                ))
                                                            }
                                                        </tr>
                                                    </thead>
                                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-center">
                                                        <tr>
                                                            <td class="px-1 xl:px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{info.EngineOilCapacity}</td>
                                                            <td class="px-1 xl:px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{info.NumberCylinders}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-1'>
                                <div className='text-center '>
                                    <span className='text-xl font-bold'>${info.price.toLocaleString()}</span> <span className={`text-red-600 line-through`}>{(info.price + 10000).toLocaleString()}</span>
                                </div>
                                <div>
                                    <Link className='p-1 flex justify-center' href={`/cars/${info.Id}`}>
                                        <button className={`${style.btn} p-1 w-36`}>Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center p-4">
                <button onClick={prevPage} className={`p-3 mx-2 ${style.btn}`} disabled={currentPage === 0}>
                    Prev
                </button>
                <button onClick={nextPage} className={`p-3 mx-2 ${style.btn}`} disabled={currentPage + 1 === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default CarsList