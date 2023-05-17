import AdminLayout from "@/layouts/AdminLayout";
import Link from "next/link";
import useBoardStore from "@/store/boardStore";
import { useEffect } from "react";
import axios from "axios";

export default function Board(){

    const { board, isLoading, getBoardList } = useBoardStore();

    useEffect(() => {
        getBoardList();
    }, [])

    return (
        <AdminLayout>
            <div>
                <h2 className="text-4xl font-bold mb-8 text-teal-700 uppercase text-center">Boards</h2>
                {isLoading ? (
                    <div>Fetching Data...</div>
                ) : (
                    <div className="grid grid-cols-3 gap-5">
                        {board.map((p) => (
                            <a 
                                key={p.id}
                                className="p-5 border border-b-gray-400 rounded-lg">
                                <h3 className="text-3xl font-bold text-teal-600 uppercase">{p.title}</h3>
                                <small className="text-gray-500 text-xl">
                                    {p.description}
                                </small>
                            </a>
                        ))}
                        <Link href="/board/add" 
                            className="p-5 border text-gray-600 border-b-gray-400 rounded-lg text-5xl flex justify-center items-center">
                            +
                        </Link>
                    </div>
                )}
            </div>
        </AdminLayout>
    )
}