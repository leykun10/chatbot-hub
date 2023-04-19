'use client'

export function SidebarItem ({category}){
    return (
        <div className="h-10 text-start capitalize" onClick={()=>{
            console.log("clicked")
        }}>
        <h1 className="ml-10 hover:underline">
        <a href={"/category/"+category}>{category}</a>
          </h1>
        </div>)
}