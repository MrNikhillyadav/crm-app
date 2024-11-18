import { useAuth0 } from "@auth0/auth0-react";
// import signup from '../assets/signup'; 
import avatar from '../assets/avatar.png'; 

const Login = () => {
          const {loginWithRedirect} = useAuth0()

  return (
          <div className=" flex justify-center rounded-md items-center h-screen bg-gray-200">
              

                    <div className="w-[30vw] h-[30vw] flex  flex-col rounded-md gap-3 items-center justify-center drop-shadow-md bg-white p-10">
                              <div className="text-xl font-bold pb-8 ">Welcome to Xeno CRM!  </div>
                              <img
                              src={avatar}
                              alt="User Avatar"
                              className="w-10 h-10 rounded-full"
                              />

                              <h1 className=" text-md p-2 text-slate-800 font-medium">Click below To Continue</h1>

                              <button onClick={(e)=> loginWithRedirect()} className="px-4  text-white py-2 bg-[#6a00f4] hover:bg-blue-700 drop-shadow-md rounded-md ">
                                        Login / Signup
                              </button>

                    </div>
        </div>
      
  )
}

export default Login