import imgSrcPromotion from "@/data/imgSrcPromotion"
import Image from "next/image"
import Link from "next/link"
import style from "@/ModuleStyles/promotion.module.css"
import { CinzelBolder } from "@/utilities/Font";

function Promotion() {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-3 ${style.bg}`}>
            {
                imgSrcPromotion.map((info, i) => (
                    <div key={i} className={`relative bg-cover bg-center h-64 m-4 rounded-xl`}>
                        <Image alt={info.alt} src={info.src}
                            className="w-full h-full object-cover absolute inset-0 opacity-35 rounded-lg" width={400} height={400} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h2 className={`text-2xl sm:text-3xl xl:text-3xl opacity-85 ${CinzelBolder.className} font-bolder mb-4 ${style.textColor}`}>{info.text}</h2>
                                {/* Poner link to cars */}
                                <Link href='/cars'>
                                    <button className={`px-4 py-2 rounded ${style.btn}`}>Go To Shop</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Promotion