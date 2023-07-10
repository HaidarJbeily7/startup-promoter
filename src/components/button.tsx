"use client"
import { useSession, signIn, signOut } from "next-auth/react";


type BtnProps ={
  text : string | null,
  action: CallableFunction,
}

export default function Button(props: BtnProps) {
  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>
  //         {props.pageProps.buttonText || "sign in"}
  //       </button>
  //     </>
  //   );
  // }
  return (
    <button
      className="bg-primary-color hover:bg-slate-200 hover:shadow-sm w-full text-black py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => props.action()}
    >
      {props.text || "sign in"}
    </button>
  );
}
