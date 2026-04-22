import {Show, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between p-4 px-10 text-xl font-semibold">
      <Link href="/"><p>NOTTY</p></Link>
      <Show when="signed-out">
        <SignInButton />
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}
