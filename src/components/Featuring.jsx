import React from "react";
import "./Featuring.css";

const Featuring = () => {
   return (
      <>
         <div className="featuringPhoto">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="28"
               height="28"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2.9"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left featText"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M15 6l-6 6l6 6" />
            </svg>

            <div className="featText">View Offers & More</div>
         </div>
      </>
   );
};

export default Featuring;
