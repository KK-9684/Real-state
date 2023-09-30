import { signIn, signOut, useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { api } from "apple/utils/api"

export default function Home() {

  return (
    <>
      <Head>
        <title>Real people and Real estate</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="https://static.rdc.moveaws.com/favicon.ico" />
      </Head>
      <main className="flex min-h-full flex-col items-center justify-center bg-main-back">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#b3ffa1] sm:text-[5rem] drop-shadow-xl">
          Real people, Real estate
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/20 p-4 text-white hover:bg-black/10"
              href="/submit/deals"
            >
              <h3 className="text-2xl font-bold">Submit deals →</h3>
              <div className="text-lg">
                text text text text text text text text text text text text text text text text text text.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/20 p-4 text-white hover:bg-black/10"
              href="/submit/buybox"
            >
              <h3 className="text-2xl font-bold">Submit buybox →</h3>
              <div className="text-lg">
                text text text text text text text text text text text text text text text text text text.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              Hi, welcome to our website.
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        href={'https://discord.com/invite/reirev'} 
        target="_blank"
        >
        Join us
      </Link>
      {/* <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button> */}
    </div>
  );
}
