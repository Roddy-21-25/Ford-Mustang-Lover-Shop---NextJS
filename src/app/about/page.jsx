import { Cinzel } from "@/utilities/Font"
import Image from "next/image";
import Link from "next/link";
import scrTeam from "@/data/scrTeam";

function AboutPage() {
    const videoId = "Bxxmt559IF0";
    return (
        <>
            <div className="text-center">
                <h1 className="font-bold m-3">Welcome To </h1>
                <h1 className={`${Cinzel.className} font-bolder text-3xl md:text-6xl`}>Mustang Lover Shop</h1>
            </div>
            <div>
                <div className="flex justify-center">
                    <p className="m-6 p-3 w-fit text-sm md:text-xl rounded-lg bg-black/10">
                        Unleash the Power, Feel the Roar: Ford Mustangs, Where Legends Are Born
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <div className="p-4 xl:col-span-2">
                        <h1 className="mb-4 font-bold text-xl text-center">Who We Are:</h1>
                        <p className="w-fit p-3 rounded-lg bg-black/10 xl:text-lg">
                            The Ford Mustang, an iconic American muscle car, made its debut in 1964 and quickly became a symbol of power and performance. Conceived as a stylish and affordable sporty car for the masses, the Mustang captured the hearts of enthusiasts with its sleek design and powerful engine options.
                            <br />
                            <br />
                            Its introduction marked the birth of the pony car class and initiated a new era in automotive history. Over the decades, the Mustang has evolved, showcasing various generations and models, each contributing to its rich legacy.
                            <br />
                            <br />
                            From dominating racetracks to making appearances in popular culture, the Ford Mustang has solidified its place as a timeless and enduring symbol of American automotive prowess.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center my-8 p-4 xl:col-span-1">
                            <iframe
                                width="560"
                                height="315"
                                className="rounded-lg"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube"
                                data-testid="YouTube"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 className={`${Cinzel.className} font-bolder text-3xl md:text-6xl mb-8`}>Team Members</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    scrTeam.map((info, i) => (
                        <div key={i} className="flex justify-center mb-8">
                            <div className="w-80 shadow-lg rounded-xl p-4 m-4">
                                <div className="flex justify-center m-4">
                                    <Image className="rounded-full" alt={`${info.name}`} src={info.src} width={100} height={100} />
                                </div>
                                <div className="text-center">
                                    <h1 className="font-bold my-2">{info.name}</h1>
                                    <p>{info.text}</p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <Link
                                        href="https://www.linkedin.com/in/roddy-2125-rafael/"
                                        target="_blank"
                                        className="block mt-2 text-md bg-blue-500 px-4 py-2 rounded-lg text-white font-bold hover:scale-105 transition-transform duration-300"
                                    >
                                        Go to LinkedIn
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AboutPage