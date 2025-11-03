import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>

      this is the page for authenticated users only!!!!
      </div>
      <div>
        <UserButton />
      </div>

    </div>
  );
}
