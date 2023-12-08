import EditForm from '@/components/form/edit-form';
import db from '@/lib/db';

const EditPage = async ({ params }) => {
    const id = Number(params.noteId)
    const note = await db.note.findUnique({
        where: {
            id
        }
    })

    return (
        <div className='pt-24 pb-10 mx-4 space-y-8 md:pt-32 md:mx-10 lg:mx-20 lg:pb-20'>
            <div>
                <h2 className="text-2xl font-semibold">Create New Note</h2>
                <p className="text-muted-foreground">Add any notes you want so that you can remember them.</p>
            </div>
            <EditForm note={note} />
        </div>
    )
}

export default EditPage;