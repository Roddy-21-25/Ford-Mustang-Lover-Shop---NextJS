import PromotionsSrc from "@/data/Promotions"
import Image from "next/image"
import style from '@/ModuleStyles/promotions.module.css'

function Promotions() {
    return (
        <div>
            {
                PromotionsSrc.map((info, i) => (
                    <div key={i} className="m-4">
                        <Image className={`rounded-lg ${style.img}`} alt={info.alt} src={info.src} width={300} height={100} />
                    </div>
                ))
            }
        </div>
    )
}

export default Promotions