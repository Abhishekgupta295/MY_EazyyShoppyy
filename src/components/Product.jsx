import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux'
import { add, remove } from '../Redux/Slices/CartSlice';


const Product = ({post}) => {

  const {Cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Product Added to Cart")
  }

  const removefromCart = () => {

    dispatch(remove(post.id));
    toast.error("Product Removed from Cart")
  }
  return (
    <div className=" bg-blue-100 flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div >
        <p className="text-gray-800 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p  className="w-40 text-gray-600 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image}  className="h-full w-full "/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">  
       <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      <div>
        {
           Cart.some((p) => p.id === post.id) ? 
           (
             <button 
              // className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              // text-[12px] p-1 px-3 uppercase 
              // hover:bg-gray-700
              // hover:text-white transition duration-300 ease-in"
               className="bg-red-600 text-white border-2 border-red-600 rounded-full font-semibold 
                   text-[12px] p-1 px-3 uppercase 
                   hover:bg-red-700 hover:border-red-700 
                   transition duration-300 ease-in"
              onClick={removefromCart}>Remove From Cart</button>
           ):
           (
             <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
              onClick = {addToCart}>Add To Cart</button>
           )
        }
      </div>
     
    </div>
  )
}

export default Product