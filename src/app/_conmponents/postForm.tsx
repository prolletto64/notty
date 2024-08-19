export default function PostForm() {
  return (
    <div>
      <form action={"/createpost"} method="post">
        <textarea className="block w-48 h-48 p-4 bg-yellow-300 text-black resize-none" name="note-text" id="note-text" />
        <div className="flex justify-center"><input className="block" type="submit" value="POST" /></div>
      </form>
    </div>
  );
}
