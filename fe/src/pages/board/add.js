import AdminLayout from "@/layouts/AdminLayout"
import LabelInput from "@/components/LabelInput"
import useBoardStore from "@/store/boardStore"
import Spinner from "@/components/Spinner";
import { useState } from "react";
import Link from "next/link";

export default function Board(){

    const { createBoard, isLoading } = useBoardStore();
    const [state, setState] = useState({
        title: '',
        description: '',
    });

    const onChangeSetState = (e) => setState({...state, [e.target.name]: e.target.value});

    function handleClickedAdd(){
        createBoard(state);
        alert('Successfully Added To The Board!')


    }

    return(
        <AdminLayout>
            <div>
                <h2 className="text-4xl font-bold mb-8 text-teal-700 uppercase text-center">Add Board</h2>
                <Spinner 
                    isLoading={isLoading}
                    loadingText="Creating Board.."
                >
                </Spinner>
                <div className="justify-center flex">
                <div className="max-w-[340px] mt-2 flex flex-col gap-4 border border-b-gray-300 p-8 rounded-lg ">
                    <LabelInput
                        placeholder="Board Title"
                        value={state.title}
                        name="title"
                        onChange={onChangeSetState}
                    >
                    </LabelInput>
                    
                    <LabelInput
                        placeholder="Enter a description"
                        value={state.description}
                        name="description"
                        onChange={onChangeSetState}
                    >
                    </LabelInput>

                    <div className="flex gap-3 items-center mt-2">
                        <Link className="text-center bg-teal-500 p-1 w-40 font-bold rounded text-white text-lg hover:bg-teal-400" href='/board'>Cancel</Link>
                        <button 
                            onClick={handleClickedAdd} 
                            className="text-center bg-teal-500 p-1 w-40 font-bold rounded text-white text-lg hover:bg-teal-400">
                               Add
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </AdminLayout>
    )
}