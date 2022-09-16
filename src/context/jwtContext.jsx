import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem("token");
    return savedJwt || null;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const [articulo, setArticulo] = useState(() => {
    const savedArticulo = localStorage.getItem("articulo");
    const initialValue = JSON.parse(savedArticulo);
    return initialValue || null;
  });

  const [plattform, setPlattform] = useState(() => {
    const savedPlattform = localStorage.getItem("plattform");
    const initialValue = JSON.parse(savedPlattform);
    return initialValue || null;
  });

  const [game, setGame] = useState(() => {
    const savedGame = localStorage.getItem("game");
    const initialValue = JSON.parse(savedGame);
    return initialValue || null;
  });

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("articulo");
    localStorage.removeItem("game");
    localStorage.removeItem("plattform");
  };

  return (
    <JwtContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        logout,
        articulo,
        setArticulo,
        plattform,
        setPlattform,
        game,
        setGame,
      }}
    >
      {children}
    </JwtContext.Provider>
  );
};
