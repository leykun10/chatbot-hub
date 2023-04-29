import { getPostContent } from "@/utils/post"
import Markdown from "markdown-to-jsx"
export default async function Blog({params}) {
    
    const data = await getPostContent(process.cwd()+"/blogs/"+params.slug+".md")
    return (<div className="lg:ml-80 mb-10 mt-8">
        <article className="prose lg:prose-xl">
            <Markdown>
{data.content}
        </Markdown>

        </article>
            </div>)
}
