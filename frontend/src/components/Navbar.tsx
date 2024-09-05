import { Avatar } from "./BlogCard"

const Navbar = () => {
  return (
      <div className="flex justify-between px-10 py-4 border-b-2 ">
        <div>
        <p className="font-bold">Medium-Blog</p>
        </div>
       
     
 <div>
        <Avatar name="Pritika" />
      </div>
    </div>
  )
}

export default Navbar
