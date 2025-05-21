import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-grey-600 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-grey-600/80 text-white" 
      
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" /> 
               
              </div>
              <h1 className="text-lg font-bold">CONNECTLY</h1>
            </Link>

           
           
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors bg-white/10 hover:bg-white/20 text-white
              // Added bg-white/10 and text-white classes
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link 
                  to={"/profile"} 
                  className={`btn btn-sm gap-2 bg-white/10 hover:bg-white/20 text-white`}
                  // Added bg-white/10 and text-white classes
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button 
                  className="flex gap-2 items-center bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md"
                  // Added styling to match other buttons
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;