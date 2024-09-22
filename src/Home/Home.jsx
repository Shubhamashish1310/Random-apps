import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center bg-pink-300 h-screen w-screen">
  <Link className="flex justify-center w-64 bg-red-900 text-white p-4 rounded" to="/randomcolour">
    Random
  </Link>
  <Link className="flex justify-center w-64 bg-red-800 text-white p-4 rounded" to="/Todolist">
   To-Do-List
  </Link>
</div>


      </div>
   
  )
}

export default Home