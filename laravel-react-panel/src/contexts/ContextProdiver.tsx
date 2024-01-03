import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({name: "Nikita"});
  const [token, _setToken] = useState(123);


  const setToken = (token) => {
    _setToken(token);
    console.log(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);

    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  return(
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)