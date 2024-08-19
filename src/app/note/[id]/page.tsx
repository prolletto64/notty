import { getSingleNote } from "~/db_queries";

export default async function NotePage({ params }: { params: { id: number } }) {
  return (
    <div>
      <form action="/updatepost" method="post">
      <textarea className="m-4 h-96 w-96 bg-yellow-300 p-4 text-black" name="note-text" id="note-text">
        {(await getSingleNote(params.id))!.text}
      </textarea>
      <div><input type="submit" value="update" /></div>
      </form>
      <form action="/deletepost" method="post">
      <input type="submit" value="delete" />
      </form>
    </div>
  );
}
