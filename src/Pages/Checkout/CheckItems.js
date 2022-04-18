import React from 'react';

const CheckItems = ({child}) => {
   const { name,price } = child;
   return (
     <div>
       <ul>
         <li style={{ listStyle: "none" }} className="w-75 mx-auto">
           <div className="d-flex w-100 border p-2 m-2 bg-success rounded mx-auto align-items-center justify-content-center">
             <h2 className="me-4 text-info">{name}</h2>
             <p>
               <span className="fs-4 text-warning fw-bold">{price}</span>
             </p>
           </div>
         </li>
       </ul>
     </div>
   );
};

export default CheckItems;