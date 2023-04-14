import type { NextPage } from "next";
import Link from "next/link";
import { initFirebase } from "../firebase/firebaseApp";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import router from "next/router";

const Home: NextPage = () => {
  initFirebase();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push("/dashboard");
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };
  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <button onClick={signIn}>
        <a className="bg-blue-600 text-white rounded-md p-2 w-48">Sign In</a>
      </button>
    </div>
  );
};

export default Home;
