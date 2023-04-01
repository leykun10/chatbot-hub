
export function ItemCard (){

    // grid  rounded-lg grid-rows-3 
    return (
      <div className="flex flex-col bg-slate-100 w-72 h-64">
        <div className="mt-4">
          <img
            className="w-12 h-12 ml-4 p-1 rounded-full ring-gray-300 dark:ring-gray-500"
            src="https://sep.yimg.com/ca/I/paulgraham_2239_0"
            alt="Bordered avatar"
          ></img>
          <div className="ml-4 mt-4">
          <h1 className="font-bold text-base">Paul GPT</h1>
        </div>
        </div>
        <div className="ml-4 mt-4">
          <p className="mt-0 mb-4 text-base font-light leading-relaxed">
            AI-powered search & chat for Paul Graham's essays.
          </p>
        </div>
        <div className="flex flex-row justify-evenly">
       <div className="">Rating</div>     
       <div className="">Link</div>     
        </div>
      </div>
    );
}