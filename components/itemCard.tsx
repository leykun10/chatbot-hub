'use client'
import {MdGrade  } from 'react-icons/md';

function checkForLength(str:string){
    if(str.length > 85){
        return str.slice(0, 85- 3) + "...";
    }else{
        return str
    }
}

function redirect(url:string){
  window.open(url)
}

export function ItemCard ({name,description,stars,imgUrl,url}:{name:string,description:string,stars:number,imgUrl:string,url:string}){
    return (
      
      <div onClick={
         ()=>redirect(url) 
        } className="flex flex-col pl-4 pt-4 pr-2 ring hover:ring-emerald-400 ring-gray-100 ring-offset-4 px-6 py-6 rounded-md  w-80 h-60 hover:cursor-pointer">
        <div className="flex flex-row pb-4 justify-between" >
          <div className='flex'>
            <img
            className="w-12 h-12 rounded-full ring-gray-300 dark:ring-gray-500 object-fill"
            src={imgUrl}
            alt="No image"
          ></img>  
          </div>
          <div className="flex items-center justify-around  h-fit w-fit rounded-md px-2">
            <MdGrade/>
            <div className='p-0.5'>{stars}</div>
          </div>


         
        </div>
        <div className="flex pb-2">
          <h1 className="font-bold text-base">{name}</h1>
        </div>
        <div className="flex-1  overflow-hidden pb-2">
          <p className="text-base font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
}