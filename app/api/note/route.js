import db from "@/lib/db";
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, description } = await req.json()

    if (!title || !description) {
        return new Response('All fields are required', { status: 400 })
    }

    try {
        const note = await db.note.create({
            data: {
                title,
                description
            }
        })

        return NextResponse.json(note, { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Internal Server Error", { status: 500 })
    }
}