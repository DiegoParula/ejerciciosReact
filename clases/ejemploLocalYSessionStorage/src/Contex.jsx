import { createContext, useEffect, useState } from "react";

// Creamos el contexto utilizando createContext()
export const UserContext = createContext();
  // Creamos una función para obtener los datos del storage
  // y otra para almacenarlos
  const getUserFromStorage = () => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : [];
  };
  const setUserInStorage = (user) =>
    localStorage.setItem("user", JSON.stringify(user));

// Creamos el proveedor del contexto que nos permitirá
// compartir dicho contexto a los componentes hijos.
const UserContextProvider = ({ children }) => {


  const [user, setUser] = useState(getUserFromStorage());

  useEffect(() => {
    setUserInStorage(user);
  }, [user]);

  const changeUser = (user) => setUser(user);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
