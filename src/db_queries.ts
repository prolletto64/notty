import "server-only";
import { db } from "./server/db/index";
import {eq } from "drizzle-orm"
export async function getNotes(){
    const notes = await db.query.posts.findMany();
    return notes;
}
export async function getSingleNote(id:number){
    const note = await db.query.posts.findFirst({where: (model,{eq})=>eq(model.id,id)});
    return note;
}