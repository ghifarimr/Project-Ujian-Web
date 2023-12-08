"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Trash, Pencil } from "lucide-react"
import axios from "axios";

const ActionButton = ({ id }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/note/${id}`);
            router.push("/");
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center gap-4 pt-20">
            <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-500/90" onClick={() => router.push(`/note/edit/${id}`)}>
                <Pencil size={18} />
                Edit
            </Button>
            <Button variant="destructive" className="flex items-center gap-2" onClick={handleDelete}>
                <Trash size={18} />
                Delete
            </Button>
        </div>
    )
}

export default ActionButton