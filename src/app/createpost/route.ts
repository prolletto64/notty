import { currentUser } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { redirect } from "next/navigation";

export async function POST(req: Request) {
  const user = (await currentUser())!.username;
  const data = (await req.formData()).get("note-text")?.toString();
  await db.insert(posts).values({ text: data, author: user });
  redirect("/");
  return Response.json({ code: 200 });
}
