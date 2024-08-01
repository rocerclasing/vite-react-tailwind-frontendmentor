import CrossIcon from "./Components/Crossicons"
import MoonIcon from "./Components/MoonIcons"

const App = () => {

return( 
      
<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
 <header className="container mx-auto px-4 px-8">
    <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Todo</h1>

        <button>

        <MoonIcon className="fill-red-400"/>

        </button>
    </div>

    <form className="overflow-hidden rounded-md bg-white py-4 flex gap-4 items-center px-4 mt-8">
         <span className="inline block h-5 w-5  rounded-full border-2 "></span>
      <input type="text" 
            placeholder="Create a new todo ..."
            className="outline-none w-full text-gray-400"/>
    </form>
</header>

    <main className="container mx-auto px-4 mt-8">

    <div className="rounded-md bg-white [&>article]:p-4">
        
        <article className="flex gap-4  border-b-gray-400 border-b">
            <button className="inline block h-5 w-5  rounded-full border-2 flex-none "></button>
            <p className="text-gray-600 grow">Complete online javascript curso en udemy</p>
            <button className="flex-none"><CrossIcon/></button>
        </article>

        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
            <button className="inline block h-5 w-5  rounded-full border-2 flex-none "></button>
            <p className="text-gray-600 grow">Complete online javascript curso en udemy</p>
            <button className="flex-none"><CrossIcon/></button>
        </article>

        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
            <button className="inline block h-5 w-5  rounded-full border-2 flex-none "></button>
            <p className="text-gray-600 grow">Complete online javascript curso en udemy</p>
            <button className="flex-none"><CrossIcon/></button>
        </article>
        
        <section className="flex justify-between py-4 px-4">
        <span className="text-gray-400">5 items left</span>
        <button className="text-gray-400">clear completed</button>
        

        </section>
      </div> 
    </main>

    <section className=" container mx-auto px-4 mt-8">
       
    <div className="flex justify-center bg-white p-4 rounded-md gap-4">

        <button className="text-blue-500">All</button>
        <button className="hover:text-blue-500">Active</button>
        <button className="hover:text-blue-500">Completed</button>
        

    </div>

        

        </section>
    
        <p className="mt-8 text-center">Drag and drop to reorder list</p>

</div>
      )


}

export default App