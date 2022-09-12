import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem("token");
    return savedJwt || null;
  });


  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const initialValue = JSON.parse(savedUser); //PUTOS CORCHETES
    return initialValue || null;
  });

  const [articulo, setArticulo] = useState();
  const [plattform, setPlattform] = useState();
  const [game, setGame] = useState();

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
