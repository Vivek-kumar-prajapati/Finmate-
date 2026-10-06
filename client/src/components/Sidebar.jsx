import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import LoginContext from "../context/LoginContext"

function Sidebar() {
  const {setLoginFlag} = useContext(LoginContext)
  const navigate = useNavigate
  function handleLogout(){

    setLoginFlag(false)
     navigate("/")

  }
  return (
    <>
    <div className="flex h-full p-4 w-64 flex-col justify-items-center  bg-[#0b1f2a]  text-white">

  
  <div className="mb-5 flex items-center  gap-2 px-2 font-bold">
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
      ✓
    </span>
    FinMate
  </div>

  
  <nav className="space-y-1 text-sm flex flex-col gap-5">

    <Link to="/" className="flex items-center gap-3 rounded-lg bg-green-500 px-3 py-2.5 font-medium">
      🏠 Dashboard
    </Link>

    <Link to="/transection" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/10">
      💳 Transactions
    </Link>

    <Link to="/budget" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/10">
      💰 Budgets
    </Link>

    <Link to="/goles" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/10">
      🎯 Goals
    </Link>

    <Link to="/analytics"  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/10">
      📊 Analytics
    </Link>

    <Link to="/aiassistance"className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/10">
      ✨ AI Assistant
    </Link>

    <Link to="setting" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/10">
      ⚙️ Settings
    </Link>

  </nav>

 
  <div className="mt-auto border-t border-white/10 pt-2">
    <Link onClick={handleLogout}className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:text-white">
      🚪 Logout
    </Link>
  </div>

 </div>

    
    </>

  )
}

export default Sidebar