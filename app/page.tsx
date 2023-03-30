import { DropdownCheckbox } from "@/components/dropdownCheckbox";
import { Footer } from "@/components/footer";
import { ItemCard } from "@/components/itemCard";
import { Navbar } from "@/components/navbar";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen  overflow-auto">
  <div>
    <Navbar></Navbar>
  </div>
  <div className="grid grid-cols-2 gap-2 ml-40 mt-10" style={{ gridTemplateColumns: '1fr 5fr' }}>
    <div className="grid grid-rows-5 bg-slate-300">
      <h2 className="ml-10">Filter by</h2>
      <iframe src="https://paul-graham-gpt.vercel.app/" width="400" height="400"></iframe>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-10">
     <ItemCard></ItemCard> 
     <ItemCard></ItemCard> 
     <ItemCard></ItemCard> 
     <ItemCard></ItemCard> 
     <ItemCard></ItemCard> 
    </div>
  </div>
  <div>
    <Footer></Footer>
  </div>
</div>

  )
}
