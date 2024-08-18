import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="flex justify-between p-4 px-10 text-xl font-semibold">
      <p>NOTTY</p>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
