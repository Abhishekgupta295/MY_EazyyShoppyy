import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from '../components/Product'
import Spinner from '../components/Spinner'

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    async function fetchProductData () {

      setLoading(true);

      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Data Recieved: ",data);
        setPosts(data)
        
      }
      catch(error){
        console.log("Error aagya hain bhai :  ",error);
        setPosts([])
      }

      setLoading(false);

    }

    useEffect(() =>{
      fetchProductData();
    },[])

  return (
    <div>
      {
        loading ? (<Spinner/>) : 
        (
          posts.length > 0 ? 
          (
            <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
              posts.map((post) => (
                <Product key = {post.id} post={post}/>
              ) )
            }
            </div>
          ) : 
          (
            <div className="flex justify-center items-center">
              No Product Recieved
            </div>
          )
        )
      }
    </div>
  )
}

export default Home