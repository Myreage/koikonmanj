import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "~/utils/api";

export function AuthShowcase() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      void router.push("/");
    }
  }, [status, router]);

  return (
    <div>
      <button
        className="rounded-lg bg-blue-500/10 px-8 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
        onClick={() => void signIn()}
      >
        Se connecter
      </button>
    </div>
  );
}

const Login = () => {
  const randomSentence = api.example.randomSentence.useQuery();
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
        Koi<span className="text-red-500">kon</span>manj
      </h1>

      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-black">
          {randomSentence.data ? randomSentence.data : ""}
        </p>
      </div>
      <AuthShowcase />
    </div>
  );
};

export default Login;
