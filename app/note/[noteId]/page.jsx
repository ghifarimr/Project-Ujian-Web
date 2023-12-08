import ActionButton from "@/components/ActionButton";
import db from "@/lib/db";
import { format } from 'date-fns';
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

const DetailPage = async ({ params }) => {
    const note = await db.note.findUnique({
        where: {
            id: Number(params.noteId)
        }
    })

    if (!note) {
        redirect("/");
    }

    return (
        <div className='pt-24 pb-10 mx-4 md:pt-32 md:mx-10 lg:mx-20 lg:pb-20'>
            <div className="flex flex-col space-y-5">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold md:text-4xl">{note.title}</h1>
                    <p className="text-muted-foreground">{format(new Date(note.createdAt), 'MMMM dd, yyyy')}</p>
                </div>
                <div className="border-b" />
                <div>
                    <p>{note.description}</p>
                </div>
                <ActionButton id={note.id} />
            </div>
        </div>
    )
}

export default DetailPage