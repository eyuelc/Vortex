import Sidebar from "../components/sidebar"
import Panel from '../components/panel'
export default function Dash() {
    return(
        <div className="flex w-full">
            <Sidebar />
            <Panel />
        </div>
    )
}