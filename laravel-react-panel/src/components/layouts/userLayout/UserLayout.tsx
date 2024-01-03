import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../../contexts/ContextProdiver"

export default function UserLayout() {
  const {user, token} = useStateContext();

  if(!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (event) => {
    event.preventDefault();
  }

  return(
    <div>
      {user.name}
      <a href="#" onClick={onLogout}>LOGOUT</a>
      <Outlet />
    </div>
  )
}