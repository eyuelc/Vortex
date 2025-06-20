import Search from "./search"
import { channels } from '../data.js'
import Pcard from '../components/pcard.jsx'

export default function Panel() {
    return (
        <div className="w-[27%] border-r">
            <Search />
            <Pcard />
        </div>
    )
}