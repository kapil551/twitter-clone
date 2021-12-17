import { SparklesIcon } from "@heroicons/react/outline";

function Feed() {
    return (
        
        // feed container
        <div className="text-white flex-grow max-w-2xl sm:ml-[4.563rem] xl:ml-[23.125rem] border-l border-r border-gray-700">
            
            {/* feed header*/}
            <div className="flex items-center sm:justify-between py-2 px-3 bg-black border-b border-gray-700 sticky top-0 z-50">
                
                <h2 className="text-lg sm:text-xl font-bold"> Home </h2>
                
                <div className="border-2 w-9 h-9 flex items-center justify-center ml-auto xl:px-0">
                    <SparklesIcon className="h-5 text-white"/>
                </div>

            </div>

            {/* Input Component --> create new post container */}
            Input Component

            {/* posts container --> display all the posts */}
            <div className="border-2 border-purple-500">
                Posts Container
            </div>

        </div>
    )
}

export default Feed;
