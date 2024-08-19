import { currentUser } from "@clerk/nextjs/server";
const user = await currentUser();

export default function PostForm() {
  if (!user) return <div>please sign in...</div>;
  return (
    <div>
      <form action={"/createpost"} method="post">
        <input type="text" name="note-text" id="note-text" />
        <input type="submit" value="POST" />
      </form>
    </div>
  );
}
