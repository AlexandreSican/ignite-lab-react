import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

interface Params {
  slug:string
}


export const Event = ()=>{

  const {slug} = useParams<{ slug:string }>()
  return (
    <div className="block sm:flex flex-col min-h-screen">
      <Header />
      <main className="block sm:flex flex-1 ">
        {slug ? <Video lessonSlug={slug}/> : <div className="flex-1"></div>}
        <Sidebar  />
      </main>
    </div>
  )
}