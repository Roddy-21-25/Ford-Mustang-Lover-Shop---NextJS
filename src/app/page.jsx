import HeaderCarrousel from "@/components/Header/HeaderCarrousel";
import HeaderDay from "@/components/Header/HeaderDay";
import HeaderSlider from "@/components/Header/HeaderSlider";
import Promotion from "@/components/Header/Promotion";
import Qualities from "@/components/Header/Qualities";

import { Cinzel } from "@/utilities/Font";

import style from '@/ModuleStyles/home.module.css'
import Image from "next/image";

import loadCars from "@/lib/loadCars";
import Gallery from "@/components/Header/Gallery";

export default async function Home() {

  const loadData = await loadCars()

  const TwoCars = loadData.slice(0, 2);
  const TwentyCars = loadData.slice(0, 20);
  const LastCars = loadData.slice(-8)

  return (
    <main>
      <HeaderSlider />
      <div>
        <h1 className={`my-8 text-center text-4xl ${style.titleHeader} ${Cinzel.className}`}>
          Deal Of The Day
        </h1>
        <HeaderDay promise={TwoCars} />
        <Promotion />
        <Qualities />
        <h1 className={`my-8 text-center text-4xl ${style.titleHeader} ${Cinzel.className}`}>
          Trending Models
        </h1>
        <HeaderCarrousel promise={TwentyCars} />
        <div className={`p-4 mt-10 grid justify-items-center ${style.bg}`}>
          <Image alt="marcas" className="opacity-75" src={`/Home/marcasWhite.png`} width={400} height={400} />
          <h1 className={`my-8 text-center text-4xl text-white/80 ${Cinzel.className}`}>
            Unleash the Power, Feel the Roar: Mustang
          </h1>
        </div>
        <div className={`mb-5 ${style.bg}`}>
          <Gallery />
        </div>
        <h1 className={`mb-8  text-center text-4xl ${style.titleHeader} ${Cinzel.className}`}>
          New Arrivals
        </h1>
        <HeaderCarrousel promise={LastCars} />
      </div>
    </main>
  )
}
