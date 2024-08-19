import React from "react";
import { db } from "../server/db/index";
import { SignedIn } from "@clerk/nextjs";
import PostForm from "./_conmponents/postForm";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const notes = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen flex-row justify-center pb-10">
      <div className="flex flex-wrap justify-center gap-4">
        {notes.map((note, i) => (
          <div
            className="h-48 w-48 text-wrap bg-yellow-300 p-4 text-black shadow-lg"
            key={i}
          >
            <p>
              {note.author} on {note.createdAt.toLocaleString()} said{" "}
              {note.text}
            </p>
            {note.createdAt != note.updatedAt && note.updatedAt && (
              <p>updated on {note.updatedAt.toLocaleString()}</p>
            )}
          </div>
        ))}
        {
          <SignedIn>
            <PostForm />
          </SignedIn>
        }
      </div>
    </main>
  );
}
