import React, { useState } from 'react'
import Card from '../component/product/Card'
import { motion , AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import {addOrder } from '../redux/slices/orderSlice';
import { useNavigate } from 'react-router'
import { handleClick } from '../configs/notificationConfig';
const Product = () => {
  const user = useSelector(state =>state.user.user)
  const Navigate = useNavigate()
  const dispatch = useDispatch()
    const [item , setItem] = useState([
        {
            id : 1,
            name : 'Summer caring box by curology',
            title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quia ipsa reprehenderit tempore fugit repellat.',
            evaluation : 4,
            price : 255,
        },
        {   id:2,
            name : 'Summer caring box by curology',
            title : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quia ipsa reprehenderit tempore fugit repellat.',
            evaluation : 5,
            price : 255,
        }

    ])
    const [display , setDisplay] = useState(1)
    const addOrderFunc = (productID,count,price) => {
      dispatch(addOrder({productID,count,price}))
      
    };
  return (
    <section>
        <AnimatePresence>
      {display === 1 ? (
        <motion.div key="product1">
          <Card item={item[0]} setDisplay={setDisplay} addOrder={ addOrderFunc} />
        </motion.div>
      ) : (
        <motion.div key="product2">
          <Card item={item[1]} setDisplay={setDisplay} addOrder={ addOrderFunc} />
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  )
}

export default Product

