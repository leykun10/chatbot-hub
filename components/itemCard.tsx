'use client'
import {MdGrade  } from 'react-icons/md';
export function ItemCard ({name,description,stars}){

    // grid  rounded-lg grid-rows-3 
    return (
      <div className="flex flex-col bg-slate-100 w-72 h-64 hover:bg-white hover:cursor-pointer">
        <div className="mt-4">
          <img
            className="w-12 h-12 ml-4 p-1 rounded-full ring-gray-300 dark:ring-gray-500"
            src="https://sep.yimg.com/ca/I/paulgraham_2239_0"
            alt="Bordered avatar"
          ></img>
          <div className="ml-4 mt-4">
          <h1 className="font-bold text-base">{name}</h1>
        </div>
        </div>
        <div className="ml-4 mt-4">
          <p className="mt-0 mb-4 text-base font-light leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-start p-4">
       <div className=""><MdGrade/><h1>{stars}</h1></div>     
       <div className=""></div>     
        </div>
      </div>
    );
}