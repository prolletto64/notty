import { currentUser } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { redirect } from "next/navigation";
import { getSingleNote } from "~/db_queries";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const user = (await currentUser())!.username;
  const id = (await req.formData()).get("id")?.toString();
  const note = await getSingleNote(parseInt(id!));
  if(note!.author==user){
    await db.delete(posts).where(eq(posts.id,parseInt(id!)));
  }
    redirect("/");
  redirect("/");
}