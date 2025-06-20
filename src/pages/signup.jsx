import Create from '../components/create'

export default function Signup() {
  return (
    <div className="sign h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 h-[70%] w-[50%] rounded-[1rem] shadow-xl p-8 flex flex-col gap-[1rem] items-center">
        <div className="flex justify-between w-full">
            <p className="p-[0.3rem] bg-white text-red-500 rounded hover:bg-gray-200 cursor-pointer">Login</p>
        </div>
        <div className="flex flex-col w-full gap-[1rem]">
            <p className="text-[1.3rem] font-bold">Create An Account</p>
            <div className="w-full flex gap-[1rem]">
                <input type="text" placeholder="First Name" className="border h-[40px] w-[40%] p-[1rem]"/>
                <input type="text" placeholder="Last Name" className="border h-[40px] w-[40%] p-[1rem]"/>
                
            </div>
            <input type="text" placeholder="Username" className="border h-[40px] w-[60%] p-[1rem]"/>
            <input type="text" placeholder="Email" className="border h-[40px] w-[60%] p-[1rem]"/>
            <Create />
        </div>
      </div>
    </div>
  );
}
