import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import Loading from "../components/Loading";
import { auth, firestore } from "../firebase/config";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(true);
    });
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    try {
      await setDoc(
        doc(firestore, `users/${user?.uid}`),
        {
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          phoneNumber: user?.phoneNumber,
          url: window.location.host,
          timestamp: serverTimestamp(),
        },
        {
          merge: true,
        }
      );
    } catch (error) {
      toast.error("Failed to sign in", {
        position: "top-right",
        autoClose: 5000,
        theme,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {loading ? children : <Loading />}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  } else {
    throw new Error("Something is wrong with auth context");
  }
};

export { AuthProvider, useAuth };
