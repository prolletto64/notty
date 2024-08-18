import React from "react";
import { db } from "../server/db/index";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  const notes = posts.map((p) => {
    return {
      id: p.id,
      content: p.text,
      author: p.author,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    };
  });

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
              {note.content}
            </p>
            {note.createdAt != note.updatedAt && note.updatedAt && (
              <p>updated on {note.updatedAt.toLocaleString()}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
