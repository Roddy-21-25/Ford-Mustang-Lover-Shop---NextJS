import CarGallery from "./CarGallery"
import DetailsBill from "./DetailsBill"
import PaymentDetails from "./PaymentDetails"
import Th from "./Th"
import Td from "./Td"

import Link from "next/link"

import style from '@/ModuleStyles/carDetails.module.css'

import PaymentDetailsData from "@/data/PaymentDetailsData"
import thDataCarDetails from "@/data/thDataCarDetails"


function CarDetails({ promise }) {
    const imgSrc = {
        MainImgUrl: promise.MainImgUrl,
        ImageUrls0: promise.ImageUrls0,
        ImageUrls1: promise.ImageUrls1,
        ImageUrls2: promise.ImageUrls2,
        ImageUrls3: promise.ImageUrls3,
        ImageUrls4: promise.ImageUrls4
    }

    const DetailsBillData = [
        {
            main: 'Qty: ',
            extra: '1'
        },
        {
            main: 'SubTotal: ',
            extra: promise.price.toLocaleString()
        },
        {
            main: 'Shipping:',
            extra: '$5,000'
        },
        {
            main: 'Promo Code: ',
            extra: '-$ 1,000'
        },
    ]

    const tdDataCarDetails = [
        {
            main: promise.Engine,
            style: 'font-medium'
        },
        {
            main: promise.Power,
            style: 'font-medium'
        },
        {
            main: promise.FuelType,
            style: 'font-medium'
        },
        {
            main: promise.EngineOilCapacity,
            style: 'font-medium'
        },
        {
            main: promise.NumberCylinders,
            style: 'font-medium'
        },
    ]

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-5">
                <div className="col-span-1 sm:col-span-3">
                    <div className={`p-4 ${style.bg} rounded-br-xl `}>
                        <CarGallery promise={imgSrc} />
                    </div>
                    <div className="mx-0 md:mx-4 my-4">
                        <div className="overflow-x-auto">
                            <table className={`min-w-full border-2 border-black/30 ${style.table}`}>
                                <thead>
                                    <tr>
                                        {
                                            thDataCarDetails.map((info, i) => (
                                                <Th key={i} data={info} />
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        {
                                            tdDataCarDetails.map((info, i) => (
                                                <Td key={i} data={info} />
                                            ))
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 px-2">
                    <div>
                        <h1 className="text-xl xl:text-4xl mt-3 font-semibold">{promise.name}</h1>
                        <div className="px-4">
                            {
                                DetailsBillData.map((info, i) => (
                                    <DetailsBill detils={info} key={i} />
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-2 mx-4">
                            <div className="grid justify-items-start text-xl font-bold text-black/80 my-3">
                                Total:
                            </div>
                            <div className="grid justify-items-end text-2xl xl:text-5xl font-bold my-3">
                                {(promise.price - 1000).toLocaleString()}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold my-3 text-2xl text-black/80">Payment Details</h1>
                        <div className="px-4">
                            {
                                PaymentDetailsData.map((info, i) => (
                                    <PaymentDetails key={i} PayDetails={info} />
                                ))
                            }
                        </div>
                        <div className="grid justify-items-end">
                            <Link href={`/cars/${promise.Id}`}>
                                <button className={`${style.bg} p-4 pl-12 text-white font-bold rounded-l-lg`}>
                                    Purchaise
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-5 text-center my-4">
                    <div>
                        <h1 className="text-3xl font-bold text-black/80 my-2">
                            Special Package
                        </h1>
                    </div>
                    <div>
                        <p className="p-4 font-semibold text-black/80 bg-black/10">
                            {promise.SpecialPackage}
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CarDetails