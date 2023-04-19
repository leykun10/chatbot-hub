'use client'

export function SidebarItem ({category}:{category:string}){
    return (
        <div className="h-10 text-start capitalize">
        <h1 className="ml-10 hover:underline">
        <a href={"/category/"+category}>{category}</a>
          </h1>
        </div>)
}