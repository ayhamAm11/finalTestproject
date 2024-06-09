import React from 'react'

import {img} from "../../content/img"
const Display = () => {
  return (
    <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-3  sm:grid-rows-2 bg-grey lato-bold-italic min-h-[50vh]'>
            <div className='max-h-[50vh] flex-center bg-move overflow-hidden  '>
                <img src={img.product1} alt="to display" className='w-full object-cover h-full'/>
            </div>
            <div className='max-h-[50vh]  flex-center  bg-gold2 px-3 sm:px-12 md:p-15 lg:p-18 flex-col gap-4'>
                <div>
                    <p className='text-center '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi omnis, aspernatur obcaecati dignissimos ipsam ab aliquam fugiat doloribus veritatis iure, laudantium exercitationem corrupti sunt autem cupiditate temporibus a nam quia!</p>
                </div>
                <button className='px-5 py-3 rounded-sm  flex items-center lato-black-italic text-black border-[3px] border-black'>
                    information
                </button>
            </div>
            <div className='max-h-[100vh]  row-span-2 overflow-hidden   flex-center bg-gold'>
            <img src={img.hero} className=" h-full w-full object-cover" />
            </div>
            <div className='max-h-[50vh]  flex-center  px-3 sm:px-12 md:p-15 lg:p-18 flex-col gap-3 bg-white'>
                <div>
                    <p className='text-center '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi omnis, aspernatur obcaecati dignissimos ipsam ab aliquam fugiat doloribus veritatis iure, laudantium exercitationem corrupti sunt autem cupiditate temporibus a nam quia, 
                    laudantium exercitationem corrupti sunt autem cupiditate temporibus a nam quia!</p>
                </div>
               
            </div>
            <div className='max-h-[50vh]   flex-center  bg-move '>
            <img src={img.collection} alt="display" className='h-full w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Display