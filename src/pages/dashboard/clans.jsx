import Sidebar from "../components/sidebar"
import Panel from '../components/panel'
import Chat from '../components/chat'
export default function Dash() {
    return(
        <div className="flex w-full">
            <Sidebar />
            <Panel />
            <Chat />
        </div>
    )
}