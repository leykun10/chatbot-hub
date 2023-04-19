import { Footer } from "@/components/footer";
import { ItemCard } from "@/components/itemCard";
import Main from "@/components/main";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { supabase } from "@/utils/superbase";

export const revalidate = 60; // revalidate this page every 60 seconds
export default async function Home() {

  const {data,error} = await supabase.from('chatbot').select('*')
  
  return (
        <div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
          <Sidebar/>
          {error!=null?<div></div>:
         <Main  data={data}/>}
        </div>
  );
}
