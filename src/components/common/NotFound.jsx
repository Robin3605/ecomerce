import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl items-center justify-center text-center text-gray-300">Not Found</h1>
      <p className="font-bold text-3xl items-center justify-center text-center text-gray-300 py-4">The page you are looking for does not exist</p>
      <Link to='/' className="flex justify-center items-center py-4">
        <button className="font-bold text-3xl items-center justify-center text-center text-gray-300 border-solid border-2 border-slate-400 rounded-lg hover:bg-slate-50 hover:text-slate-900 px-2 py-2">Go Home</button>
      </Link>
    </div>
    
  )
}

export default NotFound