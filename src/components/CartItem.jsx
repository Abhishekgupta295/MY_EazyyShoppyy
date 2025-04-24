import React from 'react'
// import {FcDeleteDatabase} from "react-icons/fc"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id)); 
    toast.error("Item Removed");
    console.log(toast); // Check the console output to see if the warning method is available
  }

  return (
    <div>
      <div className=" bg-blue-100 flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
        <div className="h-[180px]">
          <img src={item.image}  className="h-full w-full "/>
        </div>

        <div>
          <h1 className="text-gray-800 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h2 className="w-40 text-gray-600 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h2>
          <div className="flex justify-between gap-12 items-center w-full mt-5"> 
            <p className="text-green-600 font-semibold">  Price : ${item.price}</p>
            <div  onClick={removeFromCart}
              className="text-blue-950 cursor-pointer transition duration-300 transform hover:scale-125 hover:text-red-800">
               <MdDelete size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem