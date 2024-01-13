'use client';

import Image from 'next/image';
import style from '@/ModuleStyles/headercarrousel.module.css'
import Link from 'next/link';

import usePagination from '@/hooks/usePagination';

function Carrousel({ promise }) {
    const itemsPerPage = 4;
    const { currentPage, groupedPromise, nextPage, prevPage, totalPages } = usePagination(itemsPerPage, promise);

    return (
        //?  ${style.sizeH}
        <div className={`sm:grid-cols-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
            {groupedPromise[currentPage].map((info, j) => (
                <div key={j} className={`m-2 rounded-lg p-2 ${style.box}`} >
                    <div className={`${style.color}`}>
                        <h1 className='lg:text-lg font-bold text-center'>{info.name}</h1>
                    </div>
                    <div>
                        <h1 className='my-1'>
                            <span className=' xl:text-3xl font-bold ml-3'>${info.price.toLocaleString()} </span>
                            <span className='font-bold bg-yellow-200 px-4 ml-2 rounded-md text-black/70'> Hot</span>
                        </h1>
                    </div>
                    <div className="">
                        <Image alt='img' className='rounded-md mx-auto lg:mx-0' src={info.MainImgUrl} width={400} height={400} />
                    </div>
                    <div className={`grid grid-cols-1 justify-items-center mt-3 mb-1`}>
                        <div className='bg-black/5 border-x-4 border-black/20 p-1 m-1 rounded-md'>
                            <div className='text-center mx-6'>
                                <p className='font-bold'>Engine</p>
                                <p>{info.Engine}</p>
                            </div>
                        </div>
                        <div className='bg-black/5 border-x-4 border-black/20 p-1 m-1 rounded-md'>
                            <div className='text-center'>
                                <p className='font-bold'>Power:</p>
                                <p>{info.Power}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.btnContainer} px-4 mb-2`}>
                        <Link href={`/cars/${info.Id}`} className={`${style.btn} p-2 w-full text-center`}>
                            <button className=''>Pre Order</button>
                        </Link>
                    </div>
                </div>
            ))}
            <div className="flex justify-center p-4 sm:col-span-2 lg:col-span-4">
                <button onClick={prevPage} name='prev' className={`p-3 mx-2 ${style.btn}`} disabled={currentPage === 0}>
                    Prev
                </button>
                <button onClick={nextPage} name='next' className={`p-3 mx-2 ${style.btn}`} disabled={currentPage + 1 === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )

}

export default Carrousel
