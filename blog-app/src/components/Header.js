import { NavLink } from 'react-router-dom'
import { MdSettings } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'




function Header({ isLogedIn, user }) {
    return (
    <header>
        <div className="container flex justify-between align-middle header">
            <li className="list-none">
                <strong className="text-green-500 font-bold	 text-2xl">Conduit</strong>
            </li>
            <nav>
                <ul className="flex">
                <li className="ml-4 ">
                    <NavLink activeClassName='text-black' to="/" exact> Home</NavLink>
                </li>

                {
                    isLogedIn ?
                    <>
                        <li className="ml-4 ">
                        <NavLink activeClassName='text-black' className="flex align-middle" to="/editor" >
                            <FiEdit />
                            New Post
                            </NavLink>
                        </li>

                        <li className="ml-4">
                        <NavLink activeClassName='text-black' className="flex align-middle" to="/settings" >
                            <MdSettings />
                            Settings
                        </NavLink>
                        </li>

                        <li className="ml-4 ">
                        <NavLink className="flex align-middle justify-evenly" activeClassName='text-black'  to={ { pathname :`/profile/${ user.username }`} } >
                            <img src={user.image} alt={user.username} />
                            <p>{user.username}</p>
                        </NavLink>
                        </li>
                    </>
                    :
                    <>
                        <li className="ml-4 ">
                        <NavLink activeClassName='text-black' to="/signin" >Sign In</NavLink>
                        </li>

                        <li className=" ml-4 ">
                        <NavLink activeClassName='text-black' to="/signup" >Sign Up</NavLink>
                        </li>
                    </>
                }

                </ul>
            </nav>
        </div>
    </header>)

}



export default Header;