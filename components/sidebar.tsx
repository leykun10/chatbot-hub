import { supabase } from "@/utils/superbase";
import { SidebarItem } from "./sidebarItem";


export async function Sidebar(){
const {error,data} = await supabase.from('category').select('name')
return (
  <div className="flex flex-col w-60 h-2/3 divide-y text-black ring hover:ring-emerald-400 ring-gray-100 ring-offset-4 bg-gray-50 px-6 py-6 rounded-md">
    <div className="h-12 text-black">
      <h2 className="font-bold text-start ml-10">Categories</h2>
    </div>
    {data.map((item) => (<SidebarItem category={item.name} key={item.name} />))}
  </div>
);
}