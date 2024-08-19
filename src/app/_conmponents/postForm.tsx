export default function PostForm() {
  return (
    <div>
      <form action={"/createpost"} method="post">
        <input type="text" name="note-text" id="note-text" />
        <input type="submit" value="POST" />
      </form>
    </div>
  );
}
