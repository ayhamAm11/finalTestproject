import React, { useEffect, useLayoutEffect } from 'react'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { addSendedOrders, addValidOrders, sendOrder,updateSendedOrder,updateOrder } from '../redux/slices/orderSlice'
import axiosConfig from '../configs/axiosConfig'
import { useNavigate } from 'react-router'
import { handleClick } from '../configs/notificationConfig'
import axios from 'axios'
function Orders() {
  const user = useSelector(state =>state.user.user)
  const API_URLS = [
    `api/order/${user?._id}`,
    `api/invalidOrder${user?._id}`,
  ];
  const dispatch = useDispatch()
  const orders = useSelector(state => state.order)
  console.log(orders)
  const handleSendOrders = (data)=>{
    try {
      ///write sendOrder logic to the database
      dispatch(sendOrder(data))
      
    } catch (error) {
      console.log
    }
    
  }
  const sendValidOrderToRedux = (data)=>{
    dispatch(addValidOrders(data))
  }
  const sendSendedOrderToRedux = (data)=>{
    dispatch(addSendedOrders(data))
  }
  async function fetchDataFromAPI(url) {
    return axiosConfig(url)
      .then(response =>  response)
      .catch(error => {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
      });
  }
  
  useEffect(()=>{
    if(user){
      Promise.all(API_URLS.map(fetchDataFromAPI))
    .then(([sendedOrder, validOrder]) => {
      console.log('All data fetched successfully!');
      sendValidOrderToRedux(validOrder.data.data.userOrders)
      sendSendedOrderToRedux(sendedOrder.data.data.userOrders)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    }
    
  },[])
  return (
    <div className='order p-5 flex flex-col gap-4'>
      <h1 className='text-4xl w-full text-center text-gold pacifico-regular'>My Orders</h1>
      <select name="
    " id="" defaultValue={'new orders'}>
      <option value="unsended">new orders</option>
      <option value="sended">sended order</option>
      <option value="valid orders">order on the way</option>
    </select>
    <div className="flex flex-col gap-2 p-5 bg-ofwhite h-40 w-full border-2 border-gold2 lato-bold">
     <div className="flex justify-between w-full items-center gap-4 text-lg item p-2 bg-grey">
      <div className="content flex gap-4 items-center flex-[2]">
      <div className="img p-[10px]">
        <img src="" alt="" className='bg-red-400 w-[60px] h-[60px]'/>
      </div>
      <div className='flex items-center gap-4 flex-[3] p-[10px]'>
      <div className="count flex justify-center flex-1 ">product name</div>
      <div className="count flex justify-center flex-1 ">2</div>
      <div className="price flex  justify-center flex-1 ">200</div>
      </div>
   
      </div>
     
      <div className="controll flex items-center justify-end gap-4 flex-[1]">
      <div className="increament flex justify-center bg-red-400 ">
      <TiPlus className='text-xl ' size={24}  color='#fff'  />
      </div>
      <div className="dicrement flex justify-center  bg-red-400 ">
      <TiMinus className='text-xl ' size={24}   />
      </div>
      <div className="remove flex justify-center bg-red-400  ">remove</div>
      <div className="send flex justify-center bg-red-400  ">send</div>
      </div>
      
     </div>
    </div>
    </div>
    
  )
}

export default Orders