import Search from "./search"
import { channels } from '../data.js'
import Pcard from '../components/pcard.jsx'
import { Outlet } from "react-router-dom"

export default function Panel() {
    return (
        <div className="w-[27%] border-r">
            <Search />
            
            <Outlet />
        </div>
    )
}