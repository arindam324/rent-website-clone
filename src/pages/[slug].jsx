import {useState} from 'react'
import Layout from "@/components/Layout";

import {CARD_DATA} from '@/data/data'
import Image from "next/image";

import {GiPersonInBed,GiBathtub} from 'react-icons/gi'
import { BsPeopleFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import ImageCarousel from '../components/ImageCarousel'

const Post = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            {/* title tag for seo */}
            <Layout>
               <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 ">
                    <div className="relative w-full h-[400px]">
                        {data.images && (
                              <ImageCarousel
                                images={data.images}
                                currentImage={activeIndex}
                            />
                       )}
                    </div>
                    <h2 className='text-3xl mt-2 font-semibold'>{data.title}</h2>
                    <div className='w-full p-5 mt-2 bg-white shadow-sm rounded-md'>
                       <h2 className='text-2xl text-gray-400'>Overview</h2>
                       <div className='grid mt-4 grid-cols-2 grid-rows-2 gap-5'>
                        <div className="flex w-full items-center justify-between">
                            <div className='flex items-center space-x-2'>
                                <GiPersonInBed size={24}/>
                                <h2 className='text-sm font-semibold text-gray-600'>Bedrooms</h2>
                            </div>
                            <p  className='text-sm font-semibold text-gray-600'>{data.bedroom}</p>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div className='flex items-center space-x-2'>
                                <GiBathtub size={24}/>
                                <h2 className='text-sm font-semibold text-gray-600'>Bedrooms</h2>
                            </div>
                            <p  className='text-sm font-semibold text-gray-600'>{data.bedroom}</p>
                        </div>
                    
                        <div className="flex w-full items-center justify-between">
                            <div className='flex items-center space-x-2'>
                                <BsPeopleFill size={24}/>
                                <h2 className='text-sm font-semibold text-gray-600'>Maximum Tenants</h2>
                            </div>
                            <p  className='text-sm font-semibold text-gray-600'>{data.maximum_tanants}</p>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div className='flex items-center space-x-2'>
                                <MdLocationOn size={24}/>
                                <h2 className='text-sm font-semibold text-gray-600'>Location</h2>
                            </div>
                            <p  className='text-sm font-semibold text-gray-600'>{data.location}</p>
                        </div>
                        </div>  
                        <div className='mt-2'>
                            <h2 className='text-2xl text-gray-400'>Description</h2>
                            <div className='w-full h-[1px] bg-gray-300 mt-2'/>
                            <p className='text-sm text-gray-500 mt-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque enim suscipit sapiente placeat eius officiis sunt vitae consequuntur facere alias, laboriosam reiciendis dolore omnis laudantium nihil eos architecto iure!
                            </p>

                            <div className='mt-4'>
                                <h2 className='text-xl text-gray-400 '>Summary</h2>
                                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita, nisi deserunt ullam rem doloremque necessitatibus incidunt placeat est velit.</p>
                            </div>
                        </div>       
                    </div>
                </div>
                <div className="col-span-2 w-[90%] mx-auto flex flex-col space-y-10 ">
                    <div className='p-4 h-[300px] bg-white rounded-sm'>
                            helo
                    </div>
                    <div className='p-4 bg-white rounded-sm'>
dasfkn
                    </div>
                    <div className='p-4 bg-white rounded-sm'>
dsfkm
                    </div>
                </div>
               </div>
            </Layout>
        </>
    )
}

export default Post


export async function getStaticPaths() {
    const paths = CARD_DATA.map(item => {
        return {
            params: {
                slug: item.slug,
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const {slug} = params
  
    const data = CARD_DATA.find(e => e.slug === slug)

    return {
        props: {
            data: data
        }
    }
}