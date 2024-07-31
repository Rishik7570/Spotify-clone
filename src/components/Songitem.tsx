import { useContext } from "react"
import { PlayerContext } from "../Context/Playercontext"

interface songprops {
    name:string
    image:string
    desc:string
    id:number
}


const Songitem:React.FC<songprops> = ({name,image,desc,id}) => {

  const {playWithID} = useContext(PlayerContext)

  return (
    <div onClick={()=>{playWithID(id)}} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default Songitem
