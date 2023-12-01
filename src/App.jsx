import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { signUp, signIn, signOut, useAuth } from "./auth/authService";
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Import your other pages and the Navbar
import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
import Danny from "./pages/danny";
import Jordin from "./pages/jordin";
import Addie from "./pages/addie";
import Nina from "./pages/nina";

function App() {
  const currentUser = useAuth();

  const handleSignUp = async (email, password) => {
    try {
      console.log("Signing up..." + email + " " + password);
      await signUp(email, password);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const AuthWrapper = () => {
    const location = useLocation();
    // const { currentUser } = useAuth();
  
    if (currentUser === undefined) return null; // <-- or loading spinner, etc...
    console.log(currentUser);
    return currentUser
      ? <Outlet />
      : <Navigate to="/" replace state={{ from: location }} />;
  };

  return (
    <Router basename="/runtime-terror-website/">
      <Navbar
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
        onSignUp={handleSignUp}
        currentUser={currentUser}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AuthWrapper />}>
          <Route path="/Danny" element={<Danny />} />
          <Route path="/Jordin" element={<Jordin />} />
          <Route path="/Addie" element={<Addie />} />
          <Route path="/Nina" element={<Nina />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
