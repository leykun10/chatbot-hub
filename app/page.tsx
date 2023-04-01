import { Footer } from "@/components/footer";
import { ItemCard } from "@/components/itemCard";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 mt-10">
        <div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
          <Sidebar />
          <div className="flex gap-6 pb-10  flex-wrap flex-row h-max w-3/4  ml-8">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
