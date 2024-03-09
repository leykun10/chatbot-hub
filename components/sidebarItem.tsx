'use client'

export function SidebarItem ({category, isActive}:{category:string, isActive:boolean}){
 const itemClass = isActive ? "bg-emerald-500 text-white" : "bg-white text-black";

  return (
    <div  className={`h-10 text-start capitalize ${itemClass}`}>
      <h1 className="ml-10 hover:underline">
        <a href={"/category/"+category}>{category}</a>
      </h1>
    </div>
  )
}