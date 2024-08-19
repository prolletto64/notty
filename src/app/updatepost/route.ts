import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getSingleNote } from "~/db_queries";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export async function POST(req: Request) {
const data =(await req.formData());
const user = (await currentUser())!.username;
const text = data.get("note-text")?.toString();
const id = data.get("id")?.toString();
const note = await getSingleNote(parseInt(id!));
if(note!.author==user){
  await db.update(posts).set({text: text}).where(eq(posts.id,parseInt(id!)));
}
  redirect("/");
}