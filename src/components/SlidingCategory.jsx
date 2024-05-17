import React, { useState } from "react";
import "./SlidingCategory.css";
import datas from "./../assets/categoryData";
import MainMenu from "./MainMenu";

const SlidingCategory = () => {
   const [selectedCategory, setSelectedCategory] = useState("nonveg"); // Default category

   const menu = datas[0].menu;
   // const menu = datas[0].menu;
   const categories = Object.keys(menu);
   // console.log(selectedCategory);
   // console.log(categories[0]);
   return (
      <>
         <div className="sliderContainer">
            {categories.map((category) => (
               <div className="categoryCard" key={category} onClick={() => setSelectedCategory(category)}>
                  <div className="categoryBox">
                     <img src={menu[category].image} alt={`${category} category`} />
                  </div>
                  <p className="catagoryName">{category.toUpperCase()}</p>
               </div>
            ))}
         </div>
         <MainMenu selectedCategory={selectedCategory} />
      </>
   );
};

export default SlidingCategory;
