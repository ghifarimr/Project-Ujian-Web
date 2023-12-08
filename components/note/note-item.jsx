"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const NoteItem = ({ noteData }) => {
    const router = useRouter();
    return (
        <Card className="transition-all duration-300 border-2 border-black cursor-pointer shadow-custom hover:-translate-x-1 hover:-translate-y-1">
            <Link href={`/note/${noteData.id}`}>
                <CardHeader>
                    <CardTitle className="line-clamp-1">{noteData.title}</CardTitle>
                    <CardDescription>{format(new Date(noteData.createdAt), 'MMMM dd, yyyy')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{noteData.description}</p>
                </CardContent>

            </Link>
            <CardFooter className="justify-end">
                <Button size="icon" className="rounded-full" onClick={() => router.push(`/note/edit/${noteData.id}`)}>
                    <Pencil size={18} />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default NoteItem