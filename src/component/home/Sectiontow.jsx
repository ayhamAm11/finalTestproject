import React from 'react'
import Img from './Img'
import { motion } from 'framer-motion'
const Sectiontow = () => {
  return (
    <motion.section 
    initial={{ scale: 0.6, y: -100, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    className='flex flex-col sm:flex-row gap-5 min-h-[100vh] mt-10 items-center justify-start lato-bold-italic'>
     
      <motion.div 
        className='flex justify-center w-full sm:w-auto sm:flex-1 '
      >
        <Img />
      </motion.div>
      <div className=' w-full sm:w-auto sm:flex-[2] pt-[100px] sm:pt-auto p-6 sm:p-12 flex items-end'>
        <motion.div 
        >
          <h1 className='text-gold text-3xl mb-6'>Section Number 2</h1>
          <div className='flex flex-col  gap-5 '>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus dignissimos provident minus ipsa fuga quod eum sed nostrum! Sint vitae eaque totam quas. Enim nesciunt corrupti eaque deleniti blanditiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a asperiores inventore magni voluptas quas porro perspiciatis autem labore maxime, itaque fugiat, voluptates, exercitationem dolor vero corrupti placeat sit dignissimos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a asperiores inventore magni voluptas quas porro perspiciatis autem labore maxime, itaque fugiat, voluptates, exercitationem dolor vero corrupti placeat sit dignissimos?</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Sectiontow