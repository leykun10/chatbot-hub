
export function ItemCard (){

    return (
     <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="https://sep.yimg.com/ca/I/paulgraham_2239_0" alt="photo">
                </img>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Paul Graham GPT</p>
                <p className="text-base text-gray-400 font-normal">paul graham chatbot</p>
            </div>
        </div>
    )
}