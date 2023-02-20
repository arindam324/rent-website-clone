import Image from 'next/image'

import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

const ImageCarousel =({images,currentImage}) => {
    return (
        <div className="relative w-full h-96">
            <Image
                src={images[currentImage]}
                alt={`Image ${currentImage}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-4">
                <button
                className="p-2 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all duration-200"
                // onClick={previousImage}
                >
                <FaArrowAltCircleLeft size={24} />
                </button>
                <button
                className="p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all duration-200"
                // onClick={nextImage}
                >
                <FaArrowAltCircleRight size={24} />
                </button>
            </div>
        </div>

    )
}

export default ImageCarousel