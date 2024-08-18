import Link from "next/link";
import React from "react";

export default function HomePage() {
  const mockTexts = ["note #1", "note #2", "note #3", "note #4"];
  const mockNotes = mockTexts.map((txt, i) => {
    id: i;
    content: txt;
    author: "prolletto64";
    createdAt: new Date().toLocaleTimeString();
    updatedAt: new Date().toLocaleTimeString();
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p>still building...</p>
    </main>
  );
}
