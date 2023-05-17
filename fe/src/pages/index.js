import LabelInput from "@/components/LabelInput";
import useUserStore from "@/store/userStore";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
    const { login: loginUser } = useUserStore();
    const router = useRouter();

    const [state, setState] = useState({
        email: 'a@gmail.com', 
        password: '1',
    })

    const handleChange = (e) => setState({...state, [e.target.name]: e.target.value})


    function login(){
        loginUser(state.email, state.password);
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className='w-[350px] p-4 '>
                <h1 className='text-5xl font-bold text-center text-teal-500 p-3'>Scrum Board</h1>
                <div className="container bg-teal-500 rounded-2xl">
                    <div className="row p-5">
                        <div className='text-3xl text-center font-bold text-white mb-0'>Sign In</div>
                        <div className='flex flex-col gap-4 p-4'>
                    <LabelInput   
                        type="text"
                        placeholder="Username"
                        name="email"
                        onChange={handleChange}
                    >
                    </LabelInput>
                    <LabelInput 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    >
                    </LabelInput>

                    <button onClick={login} className='btn btn-primary mt-3'>Login</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
