import shareVideo from "assets/videos/share.mp4";
import { useNavigate } from "react-router-dom";
import { auth } from "firebase-app/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { path } from "constants/path";
import { LocalStorage } from "constants/localStorage";
import { client } from "utils/client";
import { IUser } from "interfaces";

const SignIn = () => {
  const navigate = useNavigate();

  const addNewUserSanity = (doc: IUser) => {
    try {
      client.createIfNotExists(doc);
      navigate(path.home);
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response: any = await signInWithPopup(auth, provider);
      const { user } = response;
      const { uid, displayName, photoURL } = user;
      localStorage.setItem(LocalStorage.user, JSON.stringify(user));
      const doc = {
        _id: uid,
        _type: "user",
        userName: displayName,
        image: photoURL,
      };
      addNewUserSanity(doc);
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="h-screen w-full relative">
      <video
        src={shareVideo}
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-white">Welcome to Pinterjoy</h2>
        <button
          type="button"
          onClick={signInWithGoogle}
          className="bg-rede7 text-white rounded-xl block px-10 py-5"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
