import { useNavigate } from 'react-router-dom'

export default function Create () {
    const navigate = useNavigate();

    const click = () => {
        navigate('/dashboard');
    }
    return (
        <div 
            onClick={click}
            className='bg-red-700 p-[0.5rem] rounded-[0.7rem] flex items-center hover:bg-red-900 cursor-pointer w-[200px] h-[50px]'>
            <p>Create Account <i className="fa-solid fa-arrow-right p-[0.3rem] bg-white rounded-[0.6rem] text-black"></i></p>
        </div>
    )
}