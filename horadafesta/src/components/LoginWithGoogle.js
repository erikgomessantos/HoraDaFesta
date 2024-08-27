import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

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
            <p style={{cursor: "pointer"}} onClick={googleLogin}>Login com Google </p>
        </div>
    )
};

export default LoginWithGoogle;