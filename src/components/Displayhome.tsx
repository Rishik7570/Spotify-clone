import { albumsData, songsData } from "../assets/frontend-assets/data"
import Albumitem from "./Albumitem"
import Navbar from "./Navbar"
import Songitem from "./Songitem"


const Displayhome = () => {
  return (
    <>
        <Navbar />
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="flex overflow-auto">
            {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} id={item.id} desc={item.desc} image={item.image} />))}
          </div>
        </div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
          <div className="flex overflow-auto">
            {songsData.map((item,index)=>(<Songitem key={index} id={item.id} name={item.name} desc={item.desc} image={item.image} />))}
          </div>
        </div>
    </>
  )
}

export default Displayhome