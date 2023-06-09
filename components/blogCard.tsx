export default function BlogCard({data}:{data:any}) {


    return (<>
    <div className="overflow-hidden h-40 w-auto  ring hover:ring-emerald-400 ring-gray-100  rounded-md  hover:cursor-pointer">
    <a href={"/blog/"+data.slug} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.subtitle}</p>
    </div>
</a>
    </div>

</>)
}