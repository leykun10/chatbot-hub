import { ItemCard } from "./itemCard"
export default function Main({data}:{data:Array<any>}){
return (
< div className="flex gap-6 pb-10  flex-wrap flex-row h-max w-3/4  ml-8">
            {data?.map((item:any) => <ItemCard key={item.id} name={item.name} description={item.description} stars={item.rating} imgUrl={item.image} url={item.url}/>)}
 </div>
)
}
