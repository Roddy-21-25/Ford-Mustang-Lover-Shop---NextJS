"use client"
import ImageGallery from "react-image-gallery"
import 'react-image-gallery/styles/css/image-gallery.css'

function CarGallery({ promise }) {
    const images = [
        {
            original: promise.MainImgUrl,
            thumbnail: promise.MainImgUrl
        },
        {
            original: promise.ImageUrls0,
            thumbnail: promise.ImageUrls0
        },
        {
            original: promise.ImageUrls1,
            thumbnail: promise.ImageUrls1
        },
        {
            original: promise.ImageUrls2,
            thumbnail: promise.ImageUrls2
        },
        {
            original: promise.ImageUrls3,
            thumbnail: promise.ImageUrls3
        },
        {
            original: promise.ImageUrls4,
            thumbnail: promise.ImageUrls4
        },
    ]

    return (
        <div>
            <ImageGallery loading="lazy" thumbnailLoading="lazy" thumbnailPosition="right" items={images} />
        </div>
    )
}

export default CarGallery