import { Sidebar } from "@/components/sidebar"
import { supabase } from "@/utils/superbase"
import Main from "@/components/main"
export default  async function Page({params}) {
  
const { data, error } = await supabase
  .from('chatbot_category')
  .select('chatbot(*)').filter('chatbot_category', 'eq', params.category)



return(<div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
          <Sidebar/>
          {error != null? <div></div>: <Main data={data.map((item) => {
  const { id, created_at, name, url, description, image, rating, repo_link } = item.chatbot;
  return {
    id,
    created_at,
    name,
    url,
    description,
    image,
    rating,
    repo_link,
  };
})} /> }
  </div>)
}

