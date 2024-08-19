import { currentUser } from "@clerk/nextjs/server";
import { getSingleNote } from "~/db_queries";

export default async function NotePage({ params }: { params: { id: number } }) {
  const user = await currentUser();
  const note = await getSingleNote(params.id);
  return (
    <div>
      {note&&note.author == user!.username && (
        <div>
          <form action="/updatepost" method="post">
            <textarea
              className="m-4 h-96 w-96 bg-yellow-300 p-4 text-black"
              name="note-text"
              id="note-text"
            >
              {note.text}
            </textarea>
            <input type="hidden" name="id" value={params.id} />
            <div>
              <input type="submit" value="update" />
            </div>
          </form>
          <form action="/deletepost" method="post">
            <input type="hidden" name="id" value={params.id} />
            <input type="submit" value="delete" />
          </form>
        </div>
      )}
      {note&&note.author != user!.username && (
        <div className="m-4 h-96 w-96 bg-yellow-300 p-4 text-black">
          {note.text}
        </div>
      )}
      {!note&&<div><p>NOTE NOT FOUND</p></div>}
    </div>
  );
}
