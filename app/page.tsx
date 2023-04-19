import Main from "@/components/main";
import Sidebar from "@/components/sidebar";
import { supabase } from "@/utils/superbase";

export const revalidate = 60; // revalidate this page every 60 seconds
export default async function Home() {

  const {data,error} = await supabase.from('chatbot').select('*')
  
  return (
        <div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
           {/* @ts-expect-error Server Component */}
          <Sidebar/>
          {error!=null?<div></div>:
         <Main  data={data}/>}
        </div>
  );
}
