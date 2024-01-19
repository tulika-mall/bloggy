import React,{ useState, useEffect} from 'react'
import axios from "axios";

export const BlogCard = () => {

    const [cards, setCards] = useState([]);

    const fetchCards= async () => {
        setCards([]);

        try{

            const res = await axios.get('http://127.0.0.1:8000/api/blogs/featured/');
            setCards(res.data);
            console.log(res.data);
        }
        catch (err) {
        console.error(err);
       }
    }
   
        useEffect(() => {
            fetchCards();
           
        }, []);
       
            return(

                <div className=" grid grid-cols-3 ">

                {cards.map(item => (
                <div>
        
                <div class=" p-6 max-w-md rounded border-2 border-gray-200 overflow-hidden ">
                <img class=" w-full h-72 border rounded-lg object-cover" src={item.image} alt="Blog Image"/>
         
              <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{item.title}</div>
               <p class="text-gray-700 text-base">
                {item.info.substring(0,100)+"...."}
              </p>
            </div>
         
            <div className='mx-auto flex py-2'>
            <img class=" w-8 h-8 rounded-full object-cover" src={item.image} alt="Blog Image"/>
            <div class="text-sm text-gray-400 py-2 px-4">{item.read_time} mins read</div>
            </div>
          </div>
         
         
         </div>
         ))}
         </div>
            );
        
        };

        export default BlogCard
      




