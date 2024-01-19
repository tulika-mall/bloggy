import React from 'react'
import { FeaturedBlogs, Hero ,Ad} from '../components/HomeScreenComponents'

const HomeScreen = () => {
  return (
   <div className=' mx-4 lg:mx-20 '>
   <Hero />
   <hr class=" w-48 h-1  mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 "></hr>
   <FeaturedBlogs />
   <hr class=" w-48 h-1  mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 "></hr>
   <Ad/>
   
   </div>
  )
}

export default HomeScreen 

