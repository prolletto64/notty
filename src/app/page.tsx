import Link from "next/link";
import React from "react";

export default function HomePage() {
  const mockTexts = ["note #1", "note #2", "note #3", "note #4"];
  const mockNotes = mockTexts.map((txt, i) => {
    return {
      id: i,
      content: txt,
      author: "prolletto64",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
  });
  return (
    <main className="flex min-h-screen flex-row justify-center pb-10">
      <div className="flex flex-wrap justify-center gap-4">
        {[
          ...mockNotes,
          ...mockNotes,
          ...mockNotes,
          ...mockNotes,
          ...mockNotes,
        ].map((note, i) => (
          <div
            className="h-48 w-48 text-wrap bg-yellow-300 p-4 text-black shadow-lg"
            key={i}
          >
            <p>
              {note.author} on {note.createdAt} said "{note.content}"
            </p>
            {note.createdAt != note.updatedAt && (
              <p>updated on {note.updatedAt}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
