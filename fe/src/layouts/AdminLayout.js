import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/router";
import {BiUserCircle} from 'react-icons/bi'

export default function AdminLayout({ children }){
    const { user, getUser, isLoading, logout } = useUserStore();
    const router = useRouter();

    
    useEffect(() => {
        getUser();
    }, [])

    return(
        <div>
            <div className="p-4 border border-b-gray-400 bg-teal-600">
                <div className="flex justify-between w-[90%] m-auto text-sm">
                    <div>
                        <h1 className="p-3 text-white text-4xl uppercase font-bold">Scrum board</h1>
                    </div>
                    <div className="flex flex-nowrap p-3 mb-0">
                        <BiUserCircle className="text-4xl font-bold p-1 text-white"/>
                        <div className="text-2xl font-bold pr-8 text-white">{user?.name}</div>
                        <div className="cursor-pointer text-center bg-white text-teal-500 p-2 font-bold rounded-md hover:bg-teal-500 hover:text-white" onClick={() => logout()}>Logout</div>
                    </div>
                    
                </div>
            </div>
            <div className="w-[90%] m-auto p-4 pt-10">
                {children}
            </div>
        </div>
    )
}