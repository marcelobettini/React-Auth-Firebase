import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <>
      <h2>Register</h2>
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
        <button type="submit">register</button>
      </form>
    </>
  );
}
