import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
export default function Signup({ user, setUser }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user.email);
        console.log(userCredential.user);
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text" placeholder="jane@doe.com" name="email" />
        </label>
        <label>
          Password
          <input
            type="text"
            placeholder="keep your password safe..."
            name="password"
          />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}
