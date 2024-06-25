import { auth } from "../firebase";

function Logout({ setUser }) {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);

        console.log("User signed out successfully");
        // Optionally, you can redirect the user or perform any other action after sign-out
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return <button onClick={logout}>Log out</button>;
}

export default Logout;
