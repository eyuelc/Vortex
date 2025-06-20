import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    const click = ()=> {
        navigate('/signup');
    }
    return(
        <div 
            onClick={click}
            className='bg-gray-200 text-black p-[0.5rem] rounded-[0.7rem] flex items-center hover:bg-gray-300 cursor-pointer w-[150px] h-[50px]'>
            <p>Join a clan <i className="fa-solid fa-arrow-right p-[0.3rem] bg-red-500 rounded-[0.6rem]"></i></p>
        </div>
    )
}
export default Join;