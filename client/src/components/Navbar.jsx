
import { useContext } from "react"
import { Link } from "react-router-dom"
import LoginContext from "../context/LoginContext"
function Navbar() {
  const {loginFlag} = useContext(LoginContext)

   console.log(loginFlag);
  return (
    <>
      
    <nav className="h-16 border-b bg-white">
  <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

    
    <div className="flex items-center gap-2 font-bold text-gray-900">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-sm text-white">
        ✓
      </span>
      FinMate
    </div>

    
    <div className="flex gap-8 text-sm text-gray-500">
      <Link to ="/" className="text-green-600">Home</Link >
      <Link to ="/features"  className="hover:text-green-600">Features</Link >
      <Link to ="/whyfindmate"  className="hover:text-green-600">Why FinMate</Link >
      <Link to ="/about"  className="hover:text-green-600">About</Link >
    </div>

   

   
    {!loginFlag && (<div className="flex items-center gap-3">
      <Link  to="/login" className="rounded-md border px-4 py-2 text-sm text-gray-700">
        Login
      </Link>

      <Link to = "/signup" className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
        Get Started
      </Link>
    </div>)}

  </div>
</nav>

    </>
  )
}

export default Navbar