import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();
  const handleGoogle = async ()=>{
      try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth, provider);
        const res = await fetch("/api/auth/google",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
            }),
        });
        const data = await res.json();
        dispatch(signInSuccess(data));
      } catch (error) {
        console.log(`could not  login in google bcos of the error${error}`);
      }
  };
  return (
    <div><button className="w-full bg-blue-500 hover:duration-500 hover:shadow-xl hover:shadow-gray-400 text-white rounded-md h-9 text-sm" type='button' onClick={handleGoogle}> <i  class="fa-brands fa-google mr-2"></i>Login with Google</button></div>
  )
}
