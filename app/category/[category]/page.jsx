import { ItemCard } from "@/components/itemCard"
import { Sidebar } from "@/components/sidebar"
import { supabase } from "@/utils/superbase"
export default  async function Page({params}) {
//   const { data, error } = await supabase
// .from('chatbot')
// .select(' *, members!inner ( * ) ')
  
 let { data, error } = await supabase
  .from('chatbot_category')
  .select('chatbot(*)').filter('chatbot_category', 'eq', params.category)

  console.log(data)

return(<div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
          <Sidebar/>
          <div className="flex gap-6 pb-10  flex-wrap flex-row h-max w-3/4  ml-8">
            {data?.map((item) => <ItemCard key={item.chatbot.id} name={item.chatbot.name} description={item.chatbot.description} stars={item.chatbot.rating} imgUrl={item.chatbot.image} url={item.chatbot.url}/>)}
          </div>
  </div>)
}

