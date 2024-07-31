import { Route, Routes, useLocation } from "react-router-dom"
import Displayhome from "./Displayhome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/frontend-assets/data"


const Display = () => {

  const displayref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isAlbum = location.pathname.includes('album')
  const albumID = isAlbum? location.pathname.slice(-1):""
  const bgcolor = albumsData[Number(albumID)].bgColor


  useEffect(()=>{
    if(isAlbum){
      displayref.current.style.background = `linear-gradient(${bgcolor},#121212)`
    }
    else{
      displayref.current.style.background = `#121212`
    }
  })
  
  

  return (
    <div ref={displayref} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Displayhome />}/>
        <Route path="/album/:id" element={<DisplayAlbum />}/>
      </Routes>
    </div>
  )
}

export default Display
