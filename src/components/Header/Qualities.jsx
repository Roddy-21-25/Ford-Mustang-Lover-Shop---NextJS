import Image from "next/image"

import srcImgQualities from "@/data/srcImgQualities"

import style from '@/ModuleStyles/qualities.module.css'

function Qualities() {
    return (
        <div className={`grid grid-cols-2 xl:grid-cols-4 py-4 xl:pt-0`}>
            {
                srcImgQualities.map((info, i) => (
                    <div key={i}
                        className={`grid grid-cols-1 lg:grid-cols-2 mx-3 mt-3 rounded-lg justify-items-stretch xl:mt-8 p-3 ${style.box}`}>
                        <div className={`justify-self-center mt-2 lg:mt-0`}>
                            <Image alt={`${info.alt}`} src={`${info.src}`} width={70} height={70}></Image>
                        </div>
                        <div className={`${style.color} justify-self-stretch text-center mt-2 lg:mt-0`}>
                            <p><strong>{info.textOne}</strong></p>
                            <p>{info.textTwo}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Qualities