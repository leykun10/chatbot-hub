import BlogCard from "@/components/blogCard";
import {getPostMetadata} from "@/utils/post";
export default async function Blog() {

    const metadatas = await getPostMetadata()

    return (<div className="flex flex-col  gap-10 lg:ml-80 mb-10 mt-8">
<div className="flex"> 
   {/* title for all posts */}
    <h1 className="text-4xl">All Posts</h1>
</div>
<hr className="h-px my-8 bg-gray-600 border-0 dark:bg-gray-700"></hr>
<div className="flex gap-4 flex-wrap flex-col lg:flex-row">

    {metadatas?.map(data=>(<BlogCard key={data.slug} data={data}/>))}
</div>
</div>)
}