import { auth } from "./firebase";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import Logout from "./components/Logout";
import { onAuthStateChanged } from "firebase/auth";
import './App.css';
import { UserCtx } from "./context/UserContext";
function App() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserCtx);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);
  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")} className="logo">Authentication with Firebase</h1>
        {user ? (
          <>
            <p>{JSON.stringify(user)}</p>
            <Logout user={user} setUser={setUser} />
          </>

        ) : (

          <p>No hay usuario registrado</p>)}


        <nav className="navbar">
          <NavLink to={"/"}
            className={({ isActive }) => isActive ? 'navbar-selected' : null}
          >Home</NavLink>
          <NavLink to={"signup"}
            className={({ isActive }) => isActive ? 'navbar-selected' : null}
          >Signup</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'navbar-selected' : null} to={"register"}>Register</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'navbar-selected' : null} to={"protected"}>Protected</NavLink>
        </nav>



      </header >
      <Outlet></Outlet>


    </>
  );
}

export default App;
