import { getSingleNote } from "~/db_queries";

// ✅ For Next.js 15 and 16 – params is a Promise
export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ← MUST await the promise
  const noteId = parseInt(id, 10);

  if (isNaN(noteId)) {
    return <div>Invalid note ID</div>;
  }

  const note = await getSingleNote(noteId);

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div>
      <h1>{note.text}</h1>
      <p>Author: {note.author}</p>
      <p>Created: {new Date(note.createdAt).toLocaleString()}</p>
    </div>
  );
}
