
export function Sidebar(){

return (
  <div className="flex flex-col w-60 divide-y">
    <div className="h-12">
      <h2 className="font-bold text-start ml-10">Categories</h2>
    </div>
    <div className="h-10 text-start">
      <h1 className="ml-10  hover:underline">
        <a href="/podcasts">Podcasts</a>
      </h1>
    </div>
    <div className="h-10 text-start">
      <h1 className="ml-10 hover:underline">
        <a href="/start-up">Start Up</a>
      </h1>
    </div>
    <div className="h-10 text-start">
      <h1 className="ml-10 hover:underline">
        <a href="/psychology">Psychology</a>
      </h1>
    </div>
    <div className="h-10 text-start">
      <h1 className="ml-10 hover:underline">
        <a href="/finance">Finance</a>
      </h1>
    </div>
    <div className="h-10 text-start">
      <h1 className="ml-10 hover:underline">
        <a href="/health">Health</a>
      </h1>
    </div>
  </div>
);
}