import Image from "next/image"
function Gallery() {
    return (
        <div className="lg:ml-52 ml-0 xl:ml-72 xl:pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 xl:p-0 pt-4 pb-8">
                <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 group">
                    <Image
                        width={300}
                        height={30}
                        className="w-full h-48 object-cover rounded-lg filter grayscale hover:filter-none hover:scale-105 hover:shadow-md hover:shadow-white/10 hover:brightness-200 hover:saturate-200 transition-all duration-300"
                        src="/Home/Gallery/gallery (2).jpg"
                        alt="gallery"
                    />
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 group">
                    <Image
                        width={300}
                        height={30}
                        className="w-full h-48 object-cover rounded-lg filter grayscale hover:filter-none hover:scale-105 hover:shadow-md hover:shadow-white/10 hover:brightness-200 hover:saturate-200 transition-all duration-300"
                        src="/Home/Gallery/gallery (1).jpg"
                        alt="gallery"
                    />
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 group">
                    <Image
                        width={300}
                        height={30}
                        className="w-full h-48 object-cover rounded-lg filter grayscale hover:filter-none hover:scale-105 hover:shadow-md hover:shadow-white/10 hover:brightness-200 hover:saturate-200 transition-all duration-300"
                        src="/Home/Gallery/gallery (3).jpg"
                        alt="gallery"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 group">
                    <Image
                        width={300}
                        height={30}
                        className="w-full h-48 object-cover rounded-lg filter grayscale hover:filter-none hover:scale-105 hover:shadow-md hover:shadow-white/10 hover:brightness-200 hover:saturate-200 transition-all duration-300"
                        src="/Home/Gallery/gallery (4).jpg"
                        alt="gallery"
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery