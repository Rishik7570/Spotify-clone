import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/frontend-assets/data"
import { useContext } from "react";
import { PlayerContext } from "../Context/Playercontext";


interface album {
    id: number;
    name: string;
    image: string;
    desc: string;
    bgColor: string;
}



const DisplayAlbum = () => {
  
  const {id} = useParams<{ id:string }>()
  const albumdata:album = albumsData[parseInt(id)]
  const {playWithID} = useContext(PlayerContext)
  

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumdata.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumdata.name}</h2>
          <h4>{albumdata.desc}</h4>
          <p className="mt-1 flex gap-2">
            <img src={assets.spotify_logo} alt="" className="inline-block w-5"/>
            <b>Spotify</b>
                <li>1,234,567 likes</li>
                <li><b>50 songs,</b></li> about 2hr 30mins
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date added</p>
        <img src={assets.clock_icon} alt="" className="w-4 m-auto"/>
      </div>
      <hr />
      {songsData.map((item,index)=>(
          <div onClick={()=>{playWithID(item.id)}} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
              <img src={item.image} alt="" className="inline w-10 mr-5"/>
              {item.name}
            </p>
            <p className="text-[15px]">{item.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
      ))}
    </>
  )
}

export default DisplayAlbum
