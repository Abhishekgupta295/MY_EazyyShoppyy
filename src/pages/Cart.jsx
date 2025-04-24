import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {Cart} = useSelector((state) => state); // Accessing the Cart state from Redux store, but the recommemeded way is
  // const Cart = useSelector((state) => state.Cart);
 // means: 👉 "Give me the current value of the Cart slice from Redux and store it in the local Cart variable in my component." e
  console.log("Printing Cart DATA: ", Cart);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log("Total Amount: ", totalAmount);


  useEffect( () => {
    setTotalAmount( Cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [Cart])

  return (
    <div className="max-w-6xl min-h-screen mx-auto p-4 ">
      {
        Cart.length > 0 ? 
        (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3 space-y-6">
                {
                  Cart.map((item, index) => {
                    return <CartItem key = {item.id} item = {item} itemIndex = {index} />
                  })
                }

              </div>

             {/* Right: Summary */}
              <div className="w-full md:w-1/3 bg-green-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-green-900">YOUR CART</h2>
                  <h3 className="text-lg font-semibold text-green-700 mb-4">SUMMARY</h3>
                  <p className="text-base mb-2">Total Items: {Cart.length}</p>
                  <p className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
                </div>

                <button className="mt-6 w-full bg-white border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-4 py-2 rounded transition duration-300">
                  Checkout Now
                </button>
              </div>

            </div>

           
        ) : 
        (
           <div className="flex flex-col items-center justify-center mt-20 border-2 border-gray-300 rounded-lg p-10 bg-gray-100">
             <h1 className="text-xl font-bold mb-4 text-slate-800">No Product in Cart, Cart is Empty!!</h1>
              <NavLink to="/" className="text-blue-600 underline">
               <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded b'>Shop Now</button>
              </NavLink>
           </div>
          
        )
      }
    </div>
  )
}

export default Cart