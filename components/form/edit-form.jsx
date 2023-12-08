"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from "axios";

const EditForm = ({ note }) => {
    const router = useRouter();
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.patch(`/api/note/${note.id}`, {
                title,
                description,
            })
            router.push(`/note/${note.id}`);
            router.refresh();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className='grid grid-cols-1 gap-2.5' onSubmit={handleUpdate}>
            <label htmlFor="title" className='font-medium'>Title</label>
            <Input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} disabled={loading} />
            <label htmlFor="description">Description</label>
            <Textarea id="description" name="description" value={description} rows={8} onChange={(e) => setDescription(e.target.value)} disabled={loading} />
            <Button disabled={loading} type="submit" className="bg-[#7ED7C1] hover:bg-[#7ED7C1]/90 text-black">
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Update
            </Button>
        </form>
    )
}

export default EditForm