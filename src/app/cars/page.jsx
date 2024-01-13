import styles from '@/ModuleStyles/carPage.module.css'
import CarsList from '@/components/Cars/CarsList';
import Promotions from '@/components/Cars/Promotions';
import loadCars from "@/lib/loadCars";
import { CinzelBolder } from "@/utilities/Font";

async function CarsPage() {
    const loadData = await loadCars()

    return (
        <div>
            <div className={`bg-black ${styles.container} mb-4`}>
                <div className={`${styles.overlay}`}></div>
                <h1 className={`${styles.h1} ${CinzelBolder.className}`}>
                    Get The Mustang Of Your Dreams
                </h1>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-5'>
                <div className='hidden xl:block '><Promotions /></div>
                <div className='xl:col-span-4'><CarsList promise={loadData} /></div>
            </div>
        </div>
    )
}

export default CarsPage