import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.randomSentence.useQuery();

  return (
    <>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Koi<span className="text-[hsl(58,96%,59%)]">kon</span>manj
          </h1>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data : ""}
            </p>
          </div>
        </div>
    </>
  );
}

export function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div>
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Bonjour {sessionData.user?.name} ! ✨</span>}
      </p>
      <button
        className="rounded-lg bg-white/10 px-8 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}
