import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DotLoader } from 'react-spinners'

const BlogPageComponents = () => {
  return (
    <div className="grid place-items-center text-center px-4 md:px-8 lg:px-16 xl:px-32"> 
      <p className="mt-8 sm:mt-24 text-3xl md:text-4xl font-extrabold mb-4">
        Latest Trending Blogs
      </p>
      <p>Categories</p>  
    </div>
  );  
};

const Blogs = () => {
    const [cards, setCards] = useState([]);
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([]);
  
    const fetchCards = async (selectedCategory) => {
      setLoading(true)
      try {
        let apiUrl = "http://127.0.0.1:8000/api/blogs/all/";
  
        if (selectedCategory) {
          apiUrl = `http://127.0.0.1:8000/api/blogs/category/${selectedCategory}/`;

        }
  
        const res = await axios.get(apiUrl);
        setCards(res.data);
        console.log(res.data);
        setLoading(false)
      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    };
  
    const handleChange = (event) => {
      const selectedCategory = event.target.value;
      setCategory(selectedCategory);
    };
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get(
            "http://127.0.0.1:8000/api/blogs/categories/all/"
          );
          setCategories(response.data);
  
          fetchCards(category);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, [category]);

  return (

    <div classname="">
    <div className="flex items-center justify-center mt-8">
    <select onChange={handleChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      </div>
 
  
  
      {loading ? (
 <div className="flex items-center justify-center  w-full mt-16 mb-16">
 <DotLoader color="rgba(118, 68, 188, 1)" />
 </div>
        ) : ( 

      <div className="grid mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-0 lg:px-4">
        {cards.map((item) => (
          <div className="max-w-md  mx-auto mb-8">
            <div className="p-4 md:p-6 rounded-xl border border-gray-200 overflow-hidden">
              <img
                className="w-full h-48 md:h-72 object-cover rounded-t-lg"
                src={item.image}
                alt="Blog Image"
              />

              <div className="px-4 md:px-6 py-4">
                <div className="font-bold text-lg md:text-xl mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {item.info.substring(0, 100) + "...."}
                </p>
              </div>

              <div className="flex items-center justify-between px-4 md:px-6 py-2">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 rounded-full object-cover mr-2"
                    src={item.image}
                    alt="Blog Image"
                  />
                  <div className="text-xs md:text-sm text-gray-400">
                    {item.read_time} mins read
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        )}
    </div>
  );
};

export  { BlogPageComponents, Blogs };
