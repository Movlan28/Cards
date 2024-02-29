import React from "react";

const Cards  = (props) => { 
    console.log(props)
    return(
   
    <div className="bg-gray-800 text-gray-300 rounded-t-2xl" key={props.index}>
        <img className="h-[200px] w-full object-cover rounded-t-2xl"src={props.img} alt="props" />
       <div className="p-8 flex fustify-center items-center flex-col">
       <h2 className="text-2x1 text-skye-200 mb-3">Title: {props.name}</h2>
        <p className="text-x1 text-green-300">Price $: {props.price}</p>
       </div>
    </div>
    );
};
export default Cards;