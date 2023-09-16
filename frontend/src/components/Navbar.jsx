import React from 'react'
import { Link } from 'react-router-dom'
const { useStore } = require('../store')

const Navbar = () => {
    const user = useStore((state) => state.user)
    const deleteUser = useStore((state) => state.deleteUser)
    console.log(user.username)

    const logoutUser = () => {
        deleteUser()
        localStorage.removeItem("token")
    }


    return (
        <div className="navbar bg-base-300 px-5 mx-auto fixed z-10">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Chirper</Link>
            </div>
            {
                user.length !== 0 ?
                    <div className="flex-none">
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg" alt='profile' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded</a>-box w-52">
                                <li>
                                    <Link to={"/profile"} className="justify-between">
                                        {user.username}
                                    </Link>
                                </li>
                                <li><Link to={"/settings"}>Settings</Link></li>
                                <li><Link to="/home">secret</Link></li>
                                <li onClick={() => logoutUser()}><Link >Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="flex-none">
                        <Link to={"/login"} className="btn btn-ghost">Login</Link>
                        <Link to={"/signup"} className="btn btn-primary">Signup</Link>
                    </div>
            }
        </div>
    )
}

export default Navbar