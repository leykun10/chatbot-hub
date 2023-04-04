'use client'
import {MdGrade  } from 'react-icons/md';

function checkForLength(str:string){
    if(str.length > 100  ){
        return str.slice(0, 100- 3) + "...";
    }else{
        return str
    }
}

export function ItemCard ({name,description,stars,imgUrl}:{name:string,description:string,stars:number,imgUrl:string}){
    return (
      <div className="flex flex-col bg-slate-100 shadow-lg w-72 h-72 hover:bg-white hover:cursor-pointer">
        <div className="mt-4">
          <img
            className="w-16 h-16 ml-4 p-1 rounded-full ring-gray-300 dark:ring-gray-500 object-fill"
            src={imgUrl}
            alt="Bordered avatar"
          ></img>
          <div className="ml-4 mt-4">
          <h1 className="font-bold text-base">{name}</h1>
        </div>
        </div>
        <div className="p-4 h-20">
          <p className=" mb-4 text-base font-light leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-start p-6">
       <div className=""><MdGrade/><h1>{stars}</h1></div>     
       <div className=""></div>     
        </div>
      </div>
    );
}