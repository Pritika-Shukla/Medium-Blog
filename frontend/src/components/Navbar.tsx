import { Avatar } from "./BlogCard"
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
      <div className="flex justify-between px-8 py-3 border-b-2  mb-2">
        <div className="flex gap-2">
          <img src={Logo} alt=""  className="h-10 w-10"/>
        <p className="font-bold  text-xl mt-1">Medium-Blog</p>
        </div>
       
     
 <div>
        <Avatar name="Pritika" />
      </div>
    </div>
  )
}

export default Navbar
