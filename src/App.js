import { JwtContextProvider } from "./context/jwtContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import EditPosts from "./pages/EditPosts";
import PostAdmin from "./pages/PostAdmin";
import NewGame from "./pages/NewGame";

function App() {
  return (
    <JwtContextProvider>
      <div className="App">
        <Router>
          <Header className="App-header" />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/edit-posts" element={<EditPosts />} />
            <Route path="/articulo/post-admin/:id" element={<PostAdmin />} />
            <Route path="/new-game" element={<NewGame />} />
          </Routes>
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
