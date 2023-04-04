import { Footer } from "@/components/footer";
import { ItemCard } from "@/components/itemCard";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { supabase } from "@/utils/superbase";
export default async function Home() {

  const { data, error } = await supabase.from('chatbot').select('*')
  console.log(data)
  return (
    <div className="flex h-screen flex-col bg-slate-100">
      <Navbar />
      <main className="flex flex-1 mt-10">
        <div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
          <Sidebar/>
          <div className="flex gap-6 pb-10  flex-wrap flex-row h-max w-3/4  ml-8">
            {data?.map((item) => <ItemCard key={item.id} name={item.name} description={item.description} stars={item.rating} imgUrl={item.image} />)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
