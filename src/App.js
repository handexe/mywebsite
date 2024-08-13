
import React, { useState, useEffect } from "react";
import MyNavbar from "./components/navbar";
import About from "./pages/About";
import AddPost from "./pages/AddPost";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import DeletePost from "./pages/DeletePost";
import ProtectedRoute from "./components/ProtecedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import './App.css';


function App() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth"))
  );
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUserEmail(user.email);
      } else {
        setIsAuth(false);
        setUserEmail("");
      }
    });
    return () => unsubscribe();
  }, [isAuth]);

  const signUserOut = () => {
    // Çıkış yapma
    signOut(auth).then(() => {
      setIsAuth(false);
      setUserEmail("");
      window.location.pathname = "/login";
    });
  };

  // Firestorea bağlanma ve id alma
  // const [data, setData] = useState([]);
  // const firestore = async () => {
  //   const valReff = collection(db, "post");
  //   const dataDb = await getDocs(valReff);
  //   setData(dataDb);
  //   return data.id;
  // };

  return (
    <div>
      <Router>
        <MyNavbar
          signUserOut={signUserOut}
          isAuth={isAuth}
          userEmail={userEmail}
        />
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/blog" element={<Blog isAuth={isAuth} />} />
          <Route path="/blog/:postId" element={<Post/>} />

          <Route path="/about" element={<About isAuth={isAuth} />} />
          <Route path="/contact" element={<Contact userEmail={userEmail} isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route
            path="/add-post"
            element={
              <ProtectedRoute
                userEmail={userEmail}
                >
                {" "}
                <AddPost />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/delete-post"
            element={
              <ProtectedRoute
                userEmail={userEmail}
                
              >
                <DeletePost />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
