import "server-only";
import { db } from "./server/db/index";
export async function getNotes(){
    const notes = await db.query.posts.findMany();
    return notes;
}