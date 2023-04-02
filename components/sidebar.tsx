import { supabase } from "@/utils/superbase";
import { SidebarItem } from "./sidebarItem";


export async function Sidebar(){
const {error,data} = await supabase.from('category').select('name,id')

return (
  <div className="flex flex-col w-60 divide-y text-cyan-500">
    <div className="h-12 text-black">
      <h2 className="font-bold text-start ml-10">Categories</h2>
    </div>
    {data.map((item) => (<SidebarItem category={item.name} key={item.id} />))}
  </div>
);
}