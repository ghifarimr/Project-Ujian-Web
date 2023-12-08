import NoteItem from '@/components/note/note-item';
import db from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const notes = await db.note.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className='pt-24 pb-10 mx-4 space-y-5 md:pt-32 md:mx-10 lg:mx-20 lg:pb-20'>
      <h2 className='text-2xl font-semibold md:text-3xl'>{`Notes (${notes.length})`}</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {notes.length > 0 ?
          notes.map((note) => (
            <NoteItem key={note.id} noteData={note} />
          )
          ) : (
            <p className='text-muted-foreground'>You don&apos;t have any notes</p>
          )}
      </div>
    </div>
  )
}
