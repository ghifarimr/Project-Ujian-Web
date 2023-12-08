import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const id = params.noteId;
    const parsedId = Number(id);

    if (!id) {
        return new Response("Invalid ID", { status: 400 })
    }

    try {
        const deleteNote = await db.note.delete({
            where: {
                id: parsedId
            }
        })

        return NextResponse.json(deleteNote, { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Internal Server Error", { status: 500 })
    }
}

export async function PATCH(req, { params }) {
    const id = params.noteId;
    const parsedId = Number(id);

    if (!id) {
        return new Response("Invalid ID", { status: 400 })
    }

    const { title, description } = await req.json();

    if (!title || !description) {
        return new Response("All fields are required", { status: 400 })
    }

    try {
        const updateNote = await db.note.update({
            where: {
                id: parsedId
            },
            data: {
                title,
                description
            }
        })

        return NextResponse.json(updateNote, { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Internal Server Error", { status: 500 })
    }
}