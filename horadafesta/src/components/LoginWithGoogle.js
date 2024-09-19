import "../components/LoginWithGoogle.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import google from "../components/google.png";

function LoginWithGoogle() {

    function googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async(result) => {
            if (result.user){
                window.location.href = "/";
            }
        });
    };

    return (
        <div>
            <p>Ou</p>
            <button className="btn-google" onClick={googleLogin}><img src={google} alt="google"/>Login com Google </button>
        </div>
    )
};

export default LoginWithGoogle;