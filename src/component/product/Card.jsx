import React, { useState } from 'react'
import {img} from '../../content/img'
import Stare from './Stare'
import { TiMinus , TiPlus } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { motion } from 'framer-motion';
import { DiUbuntu } from 'react-icons/di';

const Card = ({item , setDisplay,addOrder }) => {
    const [count , setCount ] = useState(1)
    
    const handleMinus = ()=>{
        count >= 1 ?
        setCount(count - 1):
        null

    }
    const handlePlus = ()=>{
        setCount(count + 1)
    }
  return (
    <motion.div 
      initial={{ x: item.id === 1 ? -500 : 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: item.id === 1 ? 500 : -500, opacity: 0 }}
    //   transition={{ duration: 0.4 }}
      className='flex flex-col-reverse md:flex-row px-6 sm:px-12 relative'
    >
      <div className='w-[100%] md:w-[50%] bg-ofwhite flex-center'>
        <div className='flex flex-col gap-3 md:gap-5 p-6 sm:p-12 w-full sm:w-[70%]'>
          <h1 className='text-4xl font-bold text-gold pacifico-regular '>{item.name}</h1>
          <p className='text-lg lato-regular-italic  '>{item.title}</p>
          <div>
            <p className='text-lg font-semibold mb-5'>A set of products</p>
            <Stare rating={item.evaluation} />
          </div>
          <h1 className='text-2xl font-bold'>$ {item.price}</h1>
          <div className='cursor-pointer w-[200px]  shadow-sm flex justify-between  items-center text-center rounded-md overflow-hidden border-2 border-move2'>
            <div className='flex  p-2 py-4  flex-1 justify-center items-center  border-r-2 border-move2'>
            <TiMinus className='text-xl ' size={24}  onClick={handleMinus} />
            </div>
            
            <span className='text-xl flex-1 p-2 select-none font-bold' >{count}</span>
            <div className='flex  p-2 py-4  flex-1 justify-center items-center bg-move2'>
            <TiPlus className='text-xl ' size={24}  color='#fff' onClick={handlePlus} />
            </div>
           
          </div>
          <button className='px-4 py-2 bg-move2 text-white text-2xl rounded-md shadow-sm select-none' onClick={()=>{
            addOrder(item.id,count,item.price)
          }}>
            Add to Cart
          </button>
          <h1 className='flex cursor-pointer gap-2 items-center font-bold'>
            Buy skincare Curology set product separately <FaLongArrowAltRight />
          </h1>
        </div>
      </div>
      <div className='w-[100%] md:w-[50%]'>
        <img src={img.product1} alt="product" className='w-full' />
      </div>
      {item.id === 1 ? (
        <div className='fixed right-10 top-[50%]' onClick={() => setDisplay(2)}>
          <IoIosArrowDroprightCircle className='w-[60px] h-[60px] text-move' />
        </div>
      ) : (
        <div className='fixed left-10 top-[50%]' onClick={() => setDisplay(1)}>
          <IoIosArrowDropleftCircle className='w-[50px] h-[50px] text-move' />
        </div>
      )}
    </motion.div>
  )
}

export default Card