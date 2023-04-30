import { getPostContent,getPostMetadata } from "@/utils/post"
import Markdown from "markdown-to-jsx"


export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts?.map((post) => ({
    slug: post.slug,
  }));
};



export default async function Blog({params}:{params:{slug:string}}) {
    
    const data = await getPostContent(process.cwd()+"/blogs/"+params.slug+".md")
    return (<div className="lg:ml-80 mb-10 mt-8">
         <div className="my-12 text-center">
        <h1 className="text-2xl text-emerald-600 ">{data.data.title}</h1>
        <p className="text-emerald-600 mt-2">{data.data.date}</p>
      </div>
        <article className="prose">
            <Markdown>
            {data.content}
           </Markdown>

        </article>
            </div>)
}
