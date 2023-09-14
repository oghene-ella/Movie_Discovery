import Sidebar from "../components/Routed_Page/Sidebar"
import MainContent from"../components/Routed_Page/mainContent"

const MovieIdCard = () => {
  return (
    <section className="w-full h-screen flex relative">
      <Sidebar/>
      <MainContent />
    </section>
  )
}

export default MovieIdCard