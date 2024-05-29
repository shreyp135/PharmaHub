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
    <div><button type='button' onClick={handleGoogle}>Gooogleee</button></div>
  )
}
