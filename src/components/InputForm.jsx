import { useState } from "react"

import PriceSelect from '@/components/PriceSelect'

const InputForm =() => {
    const [showFilter,setShowFilter] = useState(false)


    return (
        <div className="w-full  flex py-4 rounded-md">
           <form className="max-w-[300px] w-full p-4 rounded-md bg-white">
            <div className="flex flex-col">
                <label className="text-sm pb-2" htmlFor="search">Search</label>
                <input type="text" className="px-4 focus:outline-none border py-2 focus:ring-1 ring-green-600 rounded-md" />
            </div>
            <div className="flex mt-2 space-x-2 w-full ">
                <input className="py-2 w-[50%] px-4 rounded-md border focus:outline-none focus:ring-1 ring-green-600"/>
               
                <select className="py-2 px-4 w-[50%] rounded-md border focus:outline-none focus:ring-1 ring-green-600">
                    <option value={"KM"}>km</option>
                    <option value="Mn">miniutes</option>
                </select>
            </div>
            <input value={"search"} className="px-6 py-2 bg-green-600 text-white rounded-md mt-2" type="submit" />
            <div className="w-full h-[1px] bg-gray-300 my-4" />
                    <h2 className="text-lg text-gray-400">Filter Search :</h2>
            <div onClick={()=>setShowFilter(!showFilter)} className="w-full relative py-4 cursor-pointer rounded-md bg-gray-200">
                <div>
                    {showFilter && (
                        <div className="absolute -bottom-6 bg-white max-w-[300px] w-full p-2 rounded-sm border">
                            <label htmlFor="rent">Rent:</label>
                            <div className="w-full">
                                <PriceSelect/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
           </form>
           <div className="flex-1 bg-blue-200">
            map
            </div>
        </div>
    )
}


export default InputForm