import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {useRouter} from "next/router";

const Card = ({slug,images, title, description}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const interval = 10000;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [activeIndex, images.length, interval]);

    const router = useRouter()

    return (

        <div onClick={() => router.push(`/${slug}`)}
             className="flex items-center cursor-pointer shadow-md rounded-md  space-x-4 bg-white shadow-md ">
            <div className="card-image">
                <div className='relative w-[300px] h-[200px]'>
                    <Image src={images[activeIndex]} fill alt={title}/>
                </div>
            </div>
            <div className="card-description">
                <h2 className={"text-2xl mb-4 font-semibold text-green-500 "}>{title}</h2>
                <p className={"text-sm leading-5 text-gray-500"}>{description}</p>
            </div>
        </div>
    );
};

export default Card;
