import CardHeader from "./components/CardHeader"
import ShowAge from "./components/ShowAge"
import Arrow from "./components/Arrow"
import Calculations from "./components/context/AgeContextProvider";
import { useContext, useEffect } from "react";


function App() {

  const {handleSubmit, calculateAge} = useContext(Calculations)
  useEffect(()=>{
    console.log("Effect has been executed")
    calculateAge
}, [])

  return (
    <main className="bg-off-white  min-h-screen flex justify-center items-center" >
         <article className="bg-white shadow-md rounded-xl rounded-br-[4.5rem] h-90 min-w-[320px]  max-w-sm  font-ff-poppins p-4">
          <form onSubmit={handleSubmit}>
          <CardHeader/>
          <Arrow />
          </form>
          <ShowAge />
          </article>      
    </main>
  )
}
export default App